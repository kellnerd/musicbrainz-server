package MusicBrainz::Server::Edit::Medium::Create;
use Carp;
use Clone qw( clone );
use Moose;
use MooseX::Types::Moose qw( ArrayRef Str Int );
use MooseX::Types::Structured qw( Dict Optional );
use MusicBrainz::Server::Constants qw(
    $EDIT_MEDIUM_CREATE
    $EDIT_RELEASE_CREATE
    $STATUS_OPEN
);
use MusicBrainz::Server::Edit::Medium::Util ':all';
use MusicBrainz::Server::Edit::Types qw(
    ArtistCreditDefinition
    Nullable
    NullableOnPreview
);
use MusicBrainz::Server::Edit::Utils qw( verify_artist_credits );
use MusicBrainz::Server::Entity::Medium;
use MusicBrainz::Server::Translation qw( N_l );

extends 'MusicBrainz::Server::Edit::Generic::Create';
with 'MusicBrainz::Server::Edit::Role::Preview';
with 'MusicBrainz::Server::Edit::Medium::RelatedEntities';
with 'MusicBrainz::Server::Edit::Medium';

use aliased 'MusicBrainz::Server::Entity::Release';

sub edit_type { $EDIT_MEDIUM_CREATE }
sub edit_name { N_l('Add medium') }
sub _create_model { 'Medium' }
sub medium_id { shift->entity_id }

has '+data' => (
    isa => Dict[
        name         => Optional[Str],
        format_id    => Optional[Int],
        position     => Int,
        release      => NullableOnPreview[Dict[
            id => Int,
            name => Str
        ]],
        tracklist    => ArrayRef[track()]
    ]
);

has 'tracklist' => (
    isa => ArrayRef[track()],
    is => 'rw',
);

around _build_related_entities => sub {
    my ($orig, $self) = splice(@_, 0, 2);
    my $related = $self->$orig(@_);

    push @{ $related->{artist} }, map {
        map { $_->{artist}{id} } @{ $_->{artist_credit}->{names} }
    } @{ $self->data->{tracklist} };

    push @{ $related->{recording} },
        map { $_->{recording_id} } @{ $self->data->{tracklist} };

    return $related;
};

sub alter_edit_pending
{
    my $self = shift;
    return {
        'Medium' => [ $self->entity_id ],
        'Release' => [ $self->data->{release}->{id} ]
    }
}

sub initialize {
    my ($self, %opts) = @_;

    my $tracklist = delete $opts{tracklist};
    $opts{tracklist} = tracks_to_hash($tracklist);

    my $release = delete $opts{release};
    die 'Missing "release" argument' unless ($release || $self->preview);

    $opts{release} = {
        id => $release->id,
        name => $release->name
    } if $release;

    $self->data(\%opts);
}

sub foreign_keys
{
    my $self = shift;

    my %fk;
    $fk{MediumFormat} = { $self->data->{format_id} => [] } if $self->data->{format_id};
    $fk{Release} = { $self->data->{release}{id} => [ 'ArtistCredit' ] }
        if $self->data->{release};

    tracklist_foreign_keys(\%fk, $self->data->{tracklist});

    return \%fk;
}

sub build_display_data
{
    my ($self, $loaded) = @_;

    my $medium = $self->entity_id && $self->c->model('Medium')->get_by_id($self->entity_id);
    if ($medium)
    {
        $self->c->model('Release')->load($medium);
        $self->c->model('ArtistCredit')->load($medium->release);
    }

    my $format = $self->data->{format_id};

    my $data = {
        name         => $self->data->{name} || '',
        format       => $format ? $loaded->{MediumFormat}->{ $format } : '',
        position     => $self->data->{position},
        tracks       => display_tracklist($loaded, $self->data->{tracklist}),
        release      => $medium ? $medium->release : undef,
    };

    if (!$self->preview) {
        $data->{release} = $loaded->{Release}->{ $self->data->{release}{id} }
            || Release->new( name => $self->data->{release}{name} );
    }

    return $data;
}

sub _insert_hash {
    my ($self, $data) = @_;

    # Create related data (artist credits and recordings)
    my $tracklist = $data->{tracklist};

    verify_artist_credits($self->c, map {
        $_->{artist_credit}
    } @$tracklist);

    for my $track (@$tracklist) {
        $track->{recording_id} ||= $self->c->model('Recording')->insert({
            %$track,
            artist_credit => $self->c->model('ArtistCredit')->find_or_insert($track->{artist_credit}),
        })->id;
        delete $track->{medium_id};
    }

    $self->tracklist(clone($tracklist));

    my $release = delete $data->{release};
    $data->{release_id} = $release->{id};

    return $data;
}

override 'to_hash' => sub
{
    my $self = shift;
    my $hash = super(@_);

    # Ensure that newly-created recordings get linked in tracklist/edit_recording table
    $hash->{tracklist} = $self->tracklist;

    return $hash;
};

sub allow_auto_edit {
    my $self = shift;

    # Allow being an auto-edit if the release-add edit was opened by the same
    # editor less than an hour ago, and it's still open.

    my $release_id = $self->data->{release}->{id};

    my $open_release_edit = $self->c->sql->select_single_value("
        SELECT id FROM edit
          JOIN edit_release ON edit.id = edit_release.edit
         WHERE edit_release.release = ?
           AND edit.editor = ?
           AND edit.type = ?
           AND edit.status = ?
           AND edit.open_time - now() < interval '1 hour'
    ", $release_id, $self->editor_id, $EDIT_RELEASE_CREATE, $STATUS_OPEN);

    return defined $open_release_edit;
}

__PACKAGE__->meta->make_immutable;
no Moose;

1;

