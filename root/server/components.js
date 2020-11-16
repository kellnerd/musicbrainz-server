/*
 * @flow strict-local
 * Copyright (C) 2018 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

/* eslint-disable max-len */

const DBDefs = require('../static/scripts/common/DBDefs');

__webpack_public_path__ = DBDefs.STATIC_RESOURCES_LOCATION + '/';

module.exports = {
  /*
   * Any server-rendered page referenced via component_path in the
   * stash must be listed here.
   */
  'account/Donation': require('../account/Donation'),
  'account/EditProfile': require('../account/EditProfile'),
  'account/EmailVerificationStatus': require('../account/EmailVerificationStatus'),
  'account/LostPassword': require('../account/LostPassword'),
  'account/LostPasswordSent': require('../account/LostPasswordSent'),
  'account/LostUsername': require('../account/LostUsername'),
  'account/LostUsernameSent': require('../account/LostUsernameSent'),
  'account/Preferences': require('../account/Preferences'),
  'account/PreferencesSaved': require('../account/PreferencesSaved'),
  'account/ResetPasswordStatus': require('../account/ResetPasswordStatus'),
  'account/applications/Edit': require('../account/applications/Edit'),
  'account/applications/Index': require('../account/applications/Index'),
  'account/applications/Register': require('../account/applications/Register'),
  'account/applications/Remove': require('../account/applications/Remove'),
  'account/applications/RevokeAccess': require('../account/applications/RevokeAccess'),
  'account/sso/DiscourseRegistered': require('../account/sso/DiscourseRegistered'),
  'account/sso/DiscourseUnconfirmedEmailAddress': require('../account/sso/DiscourseUnconfirmedEmailAddress'),
  'admin/EditBanner': require('../admin/EditBanner'),
  'admin/EmailSearch': require('../admin/EmailSearch'),
  'admin/IpLookup': require('../admin/IpLookup'),
  'admin/attributes/Attribute': require('../admin/attributes/Attribute'),
  'admin/attributes/Index': require('../admin/attributes/Index'),
  'admin/attributes/Language': require('../admin/attributes/Language'),
  'admin/attributes/Script': require('../admin/attributes/Script'),
  'admin/wikidoc/CreateWikiDoc': require('../admin/wikidoc/CreateWikiDoc'),
  'admin/wikidoc/DeleteWikiDoc': require('../admin/wikidoc/DeleteWikiDoc'),
  'admin/wikidoc/EditWikiDoc': require('../admin/wikidoc/EditWikiDoc'),
  'admin/wikidoc/WikiDocIndex': require('../admin/wikidoc/WikiDocIndex'),
  'area/AreaArtists': require('../area/AreaArtists'),
  'area/AreaEvents': require('../area/AreaEvents'),
  'area/AreaIndex': require('../area/AreaIndex'),
  'area/AreaLabels': require('../area/AreaLabels'),
  'area/AreaMerge': require('../area/AreaMerge'),
  'area/AreaPlaces': require('../area/AreaPlaces'),
  'area/AreaRecordings': require('../area/AreaRecordings'),
  'area/AreaReleases': require('../area/AreaReleases'),
  'area/AreaUsers': require('../area/AreaUsers'),
  'area/AreaWorks': require('../area/AreaWorks'),
  'artist/ArtistEvents': require('../artist/ArtistEvents'),
  'artist/ArtistIndex': require('../artist/ArtistIndex'),
  'artist/ArtistMerge': require('../artist/ArtistMerge'),
  'artist/ArtistRecordings': require('../artist/ArtistRecordings'),
  'artist/ArtistRelationships': require('../artist/ArtistRelationships'),
  'artist/ArtistReleases': require('../artist/ArtistReleases'),
  'artist/ArtistWorks': require('../artist/ArtistWorks'),
  'artist/CannotSplit': require('../artist/CannotSplit'),
  'artist/SpecialPurpose': require('../artist/SpecialPurpose'),
  'collection/CollectionIndex': require('../collection/CollectionIndex'),
  'collection/CreateCollection': require('../collection/CreateCollection'),
  'collection/DeleteCollection': require('../collection/DeleteCollection'),
  'collection/EditCollection': require('../collection/EditCollection'),
  'doc/DocError': require('../doc/DocError'),
  'doc/DocPage': require('../doc/DocPage'),
  'elections/Index': require('../elections/Index'),
  'elections/Nominate': require('../elections/Nominate'),
  'elections/Show': require('../elections/Show'),
  'entity/Aliases': require('../entity/Aliases'),
  'entity/Details': require('../entity/Details'),
  'entity/NotFound': require('../entity/NotFound'),
  'entity/Ratings': require('../entity/Ratings'),
  'entity/Subscribers': require('../entity/Subscribers'),
  'entity/Tags': require('../entity/Tags'),
  'event/EventIndex': require('../event/EventIndex'),
  'event/EventMerge': require('../event/EventMerge'),
  'genre/CreateGenre': require('../genre/CreateGenre'),
  'genre/DeleteGenre': require('../genre/DeleteGenre'),
  'genre/EditGenre': require('../genre/EditGenre'),
  'genre/GenreIndex': require('../genre/GenreIndex'),
  'genre/GenreListPage': require('../genre/GenreListPage'),
  'instrument/InstrumentArtists': require('../instrument/InstrumentArtists'),
  'instrument/InstrumentIndex': require('../instrument/InstrumentIndex'),
  'instrument/InstrumentMerge': require('../instrument/InstrumentMerge'),
  'instrument/InstrumentRecordings': require('../instrument/InstrumentRecordings'),
  'instrument/InstrumentReleases': require('../instrument/InstrumentReleases'),
  'instrument/List': require('../instrument/List'),
  'isrc/Index': require('../isrc/Index'),
  'iswc/Index': require('../iswc/Index'),
  'label/LabelIndex': require('../label/LabelIndex'),
  'label/LabelMerge': require('../label/LabelMerge'),
  'label/LabelRelationships': require('../label/LabelRelationships'),
  'label/SpecialPurpose': require('../label/SpecialPurpose'),
  'main/404': require('../main/404'),
  'main/index': require('../main/index'),
  'mbid/NotFound': require('../mbid/NotFound'),
  'oauth2/OAuth2Authorize': require('../oauth2/OAuth2Authorize'),
  'oauth2/OAuth2Error': require('../oauth2/OAuth2Error'),
  'oauth2/OAuth2FormPost': require('../oauth2/OAuth2FormPost'),
  'oauth2/OAuth2Oob': require('../oauth2/OAuth2Oob'),
  'place/PlaceEvents': require('../place/PlaceEvents'),
  'place/PlaceIndex': require('../place/PlaceIndex'),
  'place/PlaceMap': require('../place/PlaceMap'),
  'place/PlaceMerge': require('../place/PlaceMerge'),
  'place/PlacePerformances': require('../place/PlacePerformances'),
  'recording/RecordingFingerprints': require('../recording/RecordingFingerprints'),
  'recording/RecordingIndex': require('../recording/RecordingIndex'),
  'recording/RecordingMerge': require('../recording/RecordingMerge'),
  'relationship/linkattributetype/RelationshipAttributeTypeInUse': require('../relationship/linkattributetype/RelationshipAttributeTypeInUse'),
  'relationship/linkattributetype/RelationshipAttributeTypesIndex': require('../relationship/linkattributetype/RelationshipAttributeTypesIndex'),
  'relationship/linktype/RelationshipTypeInUse': require('../relationship/linktype/RelationshipTypeInUse'),
  'relationship/linktype/RelationshipTypeIndex': require('../relationship/linktype/RelationshipTypeIndex'),
  'relationship/linktype/RelationshipTypePairTree': require('../relationship/linktype/RelationshipTypePairTree'),
  'relationship/linktype/RelationshipTypesList': require('../relationship/linktype/RelationshipTypesList'),
  'release_group/ReleaseGroupIndex': require('../release_group/ReleaseGroupIndex'),
  'release_group/ReleaseGroupMerge': require('../release_group/ReleaseGroupMerge'),
  'report/AnnotationsArtists': require('../report/AnnotationsArtists'),
  'report/AnnotationsLabels': require('../report/AnnotationsLabels'),
  'report/AnnotationsPlaces': require('../report/AnnotationsPlaces'),
  'report/AnnotationsRecordings': require('../report/AnnotationsRecordings'),
  'report/AnnotationsReleaseGroups': require('../report/AnnotationsReleaseGroups'),
  'report/AnnotationsReleases': require('../report/AnnotationsReleases'),
  'report/AnnotationsSeries': require('../report/AnnotationsSeries'),
  'report/AnnotationsWorks': require('../report/AnnotationsWorks'),
  'report/ArtistsContainingDisambiguationComments': require('../report/ArtistsContainingDisambiguationComments'),
  'report/ArtistsDisambiguationSameName': require('../report/ArtistsDisambiguationSameName'),
  'report/ArtistsThatMayBeGroups': require('../report/ArtistsThatMayBeGroups'),
  'report/ArtistsThatMayBePersons': require('../report/ArtistsThatMayBePersons'),
  'report/ArtistsWithMultipleOccurrencesInArtistCredits': require('../report/ArtistsWithMultipleOccurrencesInArtistCredits'),
  'report/ArtistsWithNoSubscribers': require('../report/ArtistsWithNoSubscribers'),
  'report/AsinsWithMultipleReleases': require('../report/AsinsWithMultipleReleases'),
  'report/BadAmazonUrls': require('../report/BadAmazonUrls'),
  'report/CatNoLooksLikeAsin': require('../report/CatNoLooksLikeAsin'),
  'report/CatNoLooksLikeLabelCode': require('../report/CatNoLooksLikeLabelCode'),
  'report/CDTocDubiousLength': require('../report/CDTocDubiousLength'),
  'report/CollaborationRelationships': require('../report/CollaborationRelationships'),
  'report/CoverArtRelationships': require('../report/CoverArtRelationships'),
  'report/DeprecatedRelationshipArtists': require('../report/DeprecatedRelationshipArtists'),
  'report/DeprecatedRelationshipLabels': require('../report/DeprecatedRelationshipLabels'),
  'report/DeprecatedRelationshipPlaces': require('../report/DeprecatedRelationshipPlaces'),
  'report/DeprecatedRelationshipRecordings': require('../report/DeprecatedRelationshipRecordings'),
  'report/DeprecatedRelationshipReleaseGroups': require('../report/DeprecatedRelationshipReleaseGroups'),
  'report/DeprecatedRelationshipReleases': require('../report/DeprecatedRelationshipReleases'),
  'report/DeprecatedRelationshipUrls': require('../report/DeprecatedRelationshipUrls'),
  'report/DeprecatedRelationshipWorks': require('../report/DeprecatedRelationshipWorks'),
  'report/DiscogsLinksWithMultipleArtists': require('../report/DiscogsLinksWithMultipleArtists'),
  'report/DiscogsLinksWithMultipleLabels': require('../report/DiscogsLinksWithMultipleLabels'),
  'report/DiscogsLinksWithMultipleReleaseGroups': require('../report/DiscogsLinksWithMultipleReleaseGroups'),
  'report/DiscogsLinksWithMultipleReleases': require('../report/DiscogsLinksWithMultipleReleases'),
  'report/DuplicateArtists': require('../report/DuplicateArtists'),
  'report/DuplicateEvents': require('../report/DuplicateEvents'),
  'report/DuplicateRelationshipsArtists': require('../report/DuplicateRelationshipsArtists'),
  'report/DuplicateRelationshipsLabels': require('../report/DuplicateRelationshipsLabels'),
  'report/DuplicateRelationshipsRecordings': require('../report/DuplicateRelationshipsRecordings'),
  'report/DuplicateRelationshipsReleaseGroups': require('../report/DuplicateRelationshipsReleaseGroups'),
  'report/DuplicateRelationshipsReleases': require('../report/DuplicateRelationshipsReleases'),
  'report/DuplicateRelationshipsWorks': require('../report/DuplicateRelationshipsWorks'),
  'report/DuplicateReleaseGroups': require('../report/DuplicateReleaseGroups'),
  'report/EventSequenceNotInSeries': require('../report/EventSequenceNotInSeries'),
  'report/FeaturingRecordings': require('../report/FeaturingRecordings'),
  'report/FeaturingReleaseGroups': require('../report/FeaturingReleaseGroups'),
  'report/FeaturingReleases': require('../report/FeaturingReleases'),
  'report/InstrumentsWithoutAnImage': require('../report/InstrumentsWithoutAnImage'),
  'report/IsrcsWithManyRecordings': require('../report/IsrcsWithManyRecordings'),
  'report/IswcsWithManyWorks': require('../report/IswcsWithManyWorks'),
  'report/LabelsDisambiguationSameName': require('../report/LabelsDisambiguationSameName'),
  'report/LimitedEditors': require('../report/LimitedEditors'),
  'report/MediumsWithSequenceIssues': require('../report/MediumsWithSequenceIssues'),
  'report/MultipleAsins': require('../report/MultipleAsins'),
  'report/MultipleDiscogsLinks': require('../report/MultipleDiscogsLinks'),
  'report/NoLanguage': require('../report/NoLanguage'),
  'report/NoScript': require('../report/NoScript'),
  'report/PartOfSetRelationships': require('../report/PartOfSetRelationships'),
  'report/PlacesWithoutCoordinates': require('../report/PlacesWithoutCoordinates'),
  'report/PossibleCollaborations': require('../report/PossibleCollaborations'),
  'report/RecordingTrackDifferentName': require('../report/RecordingTrackDifferentName'),
  'report/RecordingsSameNameDifferentArtistsSameName': require('../report/RecordingsSameNameDifferentArtistsSameName'),
  'report/RecordingsWithEarliestReleaseRelationships': require('../report/RecordingsWithEarliestReleaseRelationships'),
  'report/RecordingsWithFutureDates': require('../report/RecordingsWithFutureDates'),
  'report/RecordingsWithVaryingTrackLengths': require('../report/RecordingsWithVaryingTrackLengths'),
  'report/RecordingsWithoutVaCredit': require('../report/RecordingsWithoutVaCredit'),
  'report/RecordingsWithoutVaLink': require('../report/RecordingsWithoutVaLink'),
  'report/ReleaseGroupsWithoutVaCredit': require('../report/ReleaseGroupsWithoutVaCredit'),
  'report/ReleaseGroupsWithoutVaLink': require('../report/ReleaseGroupsWithoutVaLink'),
  'report/ReleaseLabelSameArtist': require('../report/ReleaseLabelSameArtist'),
  'report/ReleaseRgDifferentName': require('../report/ReleaseRgDifferentName'),
  'report/ReleasedTooEarly': require('../report/ReleasedTooEarly'),
  'report/ReleasesInCaaWithCoverArtRelationships': require('../report/ReleasesInCaaWithCoverArtRelationships'),
  'report/ReleasesMissingDiscIds': require('../report/ReleasesMissingDiscIds'),
  'report/ReleasesConflictingDiscIds': require('../report/ReleasesConflictingDiscIds'),
  'report/ReleasesSameBarcode': require('../report/ReleasesSameBarcode'),
  'report/ReleasesToConvert': require('../report/ReleasesToConvert'),
  'report/ReleasesWithCaaNoTypes': require('../report/ReleasesWithCaaNoTypes'),
  'report/ReleasesWithDownloadRelationships': require('../report/ReleasesWithDownloadRelationships'),
  'report/ReleasesWithNoMediums': require('../report/ReleasesWithNoMediums'),
  'report/ReleasesWithUnlikelyLanguageScript': require('../report/ReleasesWithUnlikelyLanguageScript'),
  'report/ReleasesWithoutVaCredit': require('../report/ReleasesWithoutVaCredit'),
  'report/ReleasesWithoutVaLink': require('../report/ReleasesWithoutVaLink'),
  'report/ReportNotAvailable': require('../report/ReportNotAvailable'),
  'report/ReportsIndex': require('../report/ReportsIndex'),
  'report/SeparateDiscs': require('../report/SeparateDiscs'),
  'report/SetInDifferentRg': require('../report/SetInDifferentRg'),
  'report/SingleMediumReleasesWithMediumTitles': require('../report/SingleMediumReleasesWithMediumTitles'),
  'report/SomeFormatsUnset': require('../report/SomeFormatsUnset'),
  'report/SuperfluousDataTracks': require('../report/SuperfluousDataTracks'),
  'report/TracksNamedWithSequence': require('../report/TracksNamedWithSequence'),
  'report/TracksWithSequenceIssues': require('../report/TracksWithSequenceIssues'),
  'report/TracksWithoutTimes': require('../report/TracksWithoutTimes'),
  'report/UnlinkedPseudoReleases': require('../report/UnlinkedPseudoReleases'),
  'search/components/AnnotationResults': require('../search/components/AnnotationResults'),
  'search/components/AreaResults': require('../search/components/AreaResults'),
  'search/components/ArtistResults': require('../search/components/ArtistResults'),
  'search/components/CDStubResults': require('../search/components/CDStubResults'),
  'search/components/DocResults': require('../search/components/DocResults'),
  'search/components/EditorResults': require('../search/components/EditorResults'),
  'search/components/EventResults': require('../search/components/EventResults'),
  'search/components/InstrumentResults': require('../search/components/InstrumentResults'),
  'search/components/LabelResults': require('../search/components/LabelResults'),
  'search/components/PaginatedSearchResults': require('../search/components/PaginatedSearchResults'),
  'search/components/PlaceResults': require('../search/components/PlaceResults'),
  'search/components/RecordingResults': require('../search/components/RecordingResults'),
  'search/components/ReleaseGroupResults': require('../search/components/ReleaseGroupResults'),
  'search/components/ReleaseResults': require('../search/components/ReleaseResults'),
  'search/components/SeriesResults': require('../search/components/SeriesResults'),
  'search/components/TagResults': require('../search/components/TagResults'),
  'search/components/WorkResults': require('../search/components/WorkResults'),
  'series/SeriesIndex': require('../series/SeriesIndex'),
  'series/SeriesMerge': require('../series/SeriesMerge'),
  'statistics/Countries': require('../statistics/Countries'),
  'statistics/CoverArt': require('../statistics/CoverArt'),
  'statistics/Editors': require('../statistics/Editors'),
  'statistics/Edits': require('../statistics/Edits'),
  'statistics/Formats': require('../statistics/Formats'),
  'statistics/Index': require('../statistics/Index'),
  'statistics/LanguagesScripts': require('../statistics/LanguagesScripts'),
  'statistics/NoStatistics': require('../statistics/NoStatistics'),
  'statistics/Relationships': require('../statistics/Relationships'),
  'tag/EntityList': require('../tag/EntityList'),
  'tag/NotFound': require('../tag/NotFound'),
  'tag/TagCloud': require('../tag/TagCloud'),
  'tag/TagIndex': require('../tag/TagIndex'),
  'taglookup/ArtistResults': require('../taglookup/ArtistResults'),
  'taglookup/Index': require('../taglookup/Index'),
  'taglookup/NotFound': require('../taglookup/NotFound'),
  'taglookup/RecordingResults': require('../taglookup/RecordingResults'),
  'taglookup/ReleaseResults': require('../taglookup/ReleaseResults'),
  'taglookup/Results': require('../taglookup/Results'),
  'url/UrlIndex': require('../url/UrlIndex'),
  'user/PrivilegedUsers': require('../user/PrivilegedUsers'),
  'user/ReportUser': require('../user/ReportUser'),
  'user/UserCollections': require('../user/UserCollections'),
  'user/UserMessage': require('../user/UserMessage'),
  'user/UserProfile': require('../user/UserProfile'),
  'user/UserSubscriptions': require('../user/UserSubscriptions'),
  'vote/VotingIndex': require('../vote/VotingIndex'),
  'work/WorkIndex': require('../work/WorkIndex'),
  'work/WorkMerge': require('../work/WorkMerge'),

  /*
   * XXX Components included via React.embed in our TT templates
   * must be listed here. These no longer need to be present once the
   * pages that embed them are fully converted to React.
   */
  'area/AreaHeader': require('../area/AreaHeader'),
  'artist/ArtistHeader': require('../artist/ArtistHeader'),
  'collection/CollectionHeader': require('../collection/CollectionHeader'),
  'components/Aliases': require('../components/Aliases'),
  'components/GroupedTrackRelationships': require('../components/GroupedTrackRelationships'),
  'components/MediumToolbox': require('../components/MediumToolbox'),
  'components/Relationships': require('../components/Relationships'),
  'components/RelationshipsTable': require('../components/RelationshipsTable'),
  'components/UserAccountTabs': require('../components/UserAccountTabs'),
  'components/VotingPeriod': require('../components/VotingPeriod'),
  'edit/CannotApproveEdit': require('../edit/CannotApproveEdit'),
  'edit/CannotCancelEdit': require('../edit/CannotCancelEdit'),
  'edit/CannotVote': require('../edit/CannotVote'),
  'edit/NoteIsRequired': require('../edit/NoteIsRequired'),
  'edit/components/EditSidebar': require('../edit/components/EditSidebar'),
  'edit/components/EditSummary': require('../edit/components/EditSummary'),
  'edit/components/Vote': require('../edit/components/Vote'),
  'edit/details/AddAnnotation': require('../edit/details/AddAnnotation'),
  'edit/details/AddArea': require('../edit/details/AddArea'),
  'edit/details/AddArtist': require('../edit/details/AddArtist'),
  'edit/details/AddCoverArt': require('../edit/details/AddCoverArt'),
  'edit/details/AddDiscId': require('../edit/details/AddDiscId'),
  'edit/details/AddEvent': require('../edit/details/AddEvent'),
  'edit/details/AddInstrument': require('../edit/details/AddInstrument'),
  'edit/details/AddIsrcs': require('../edit/details/AddIsrcs'),
  'edit/details/AddIswcs': require('../edit/details/AddIswcs'),
  'edit/details/AddLabel': require('../edit/details/AddLabel'),
  'edit/details/AddMedium': require('../edit/details/AddMedium'),
  'edit/details/AddPlace': require('../edit/details/AddPlace'),
  'edit/details/AddRelationship': require('../edit/details/AddRelationship'),
  'edit/details/AddRelationshipAttribute': require('../edit/details/AddRelationshipAttribute'),
  'edit/details/AddRelationshipType': require('../edit/details/AddRelationshipType'),
  'edit/details/AddReleaseGroup': require('../edit/details/AddReleaseGroup'),
  'edit/details/AddReleaseLabel': require('../edit/details/AddReleaseLabel'),
  'edit/details/AddRemoveAlias': require('../edit/details/AddRemoveAlias'),
  'edit/details/AddSeries': require('../edit/details/AddSeries'),
  'edit/details/AddStandaloneRecording': require('../edit/details/AddStandaloneRecording'),
  'edit/details/AddWork': require('../edit/details/AddWork'),
  'edit/details/EditAlias': require('../edit/details/EditAlias'),
  'edit/details/EditArea': require('../edit/details/EditArea'),
  'edit/details/EditArtist': require('../edit/details/EditArtist'),
  'edit/details/EditArtistCredit': require('../edit/details/EditArtistCredit'),
  'edit/details/EditEvent': require('../edit/details/EditEvent'),
  'edit/details/EditLabel': require('../edit/details/EditLabel'),
  'edit/details/EditPlace': require('../edit/details/EditPlace'),
  'edit/details/EditRecording': require('../edit/details/EditRecording'),
  'edit/details/EditRelationship': require('../edit/details/EditRelationship'),
  'edit/details/EditRelationshipAttribute': require('../edit/details/EditRelationshipAttribute'),
  'edit/details/EditReleaseGroup': require('../edit/details/EditReleaseGroup'),
  'edit/details/EditSeries': require('../edit/details/EditSeries'),
  'edit/details/EditUrl': require('../edit/details/EditUrl'),
  'edit/details/EditWork': require('../edit/details/EditWork'),
  'edit/details/MergeAreas': require('../edit/details/MergeAreas'),
  'edit/details/MergeArtists': require('../edit/details/MergeArtists'),
  'edit/details/MergeEvents': require('../edit/details/MergeEvents'),
  'edit/details/MergeInstruments': require('../edit/details/MergeInstruments'),
  'edit/details/MergeLabels': require('../edit/details/MergeLabels'),
  'edit/details/MergePlaces': require('../edit/details/MergePlaces'),
  'edit/details/MergeRecordings': require('../edit/details/MergeRecordings'),
  'edit/details/MergeReleaseGroups': require('../edit/details/MergeReleaseGroups'),
  'edit/details/MergeSeries': require('../edit/details/MergeSeries'),
  'edit/details/MergeWorks': require('../edit/details/MergeWorks'),
  'edit/details/MoveDiscId': require('../edit/details/MoveDiscId'),
  'edit/details/RemoveDiscId': require('../edit/details/RemoveDiscId'),
  'edit/details/RemoveEntity': require('../edit/details/RemoveEntity'),
  'edit/details/RemoveIsrc': require('../edit/details/RemoveIsrc'),
  'edit/details/RemoveIswc': require('../edit/details/RemoveIswc'),
  'edit/details/RemoveMedium': require('../edit/details/RemoveMedium'),
  'edit/details/RemoveRelationship': require('../edit/details/RemoveRelationship'),
  'edit/details/RemoveReleaseLabel': require('../edit/details/RemoveReleaseLabel'),
  'edit/details/ReorderRelationships': require('../edit/details/ReorderRelationships'),
  'edit/details/historic/AddDiscId': require('../edit/details/historic/AddDiscId'),
  'edit/details/historic/AddRelationship': require('../edit/details/historic/AddRelationship'),
  'edit/details/historic/AddRelease': require('../edit/details/historic/AddRelease'),
  'edit/details/historic/AddReleaseAnnotation': require('../edit/details/historic/AddReleaseAnnotation'),
  'edit/details/historic/AddTrackKV': require('../edit/details/historic/AddTrackKV'),
  'edit/details/historic/AddTrackOld': require('../edit/details/historic/AddTrackOld'),
  'edit/details/historic/ChangeArtistQuality': require('../edit/details/historic/ChangeArtistQuality'),
  'edit/details/historic/ChangeReleaseArtist': require('../edit/details/historic/ChangeReleaseArtist'),
  'edit/details/historic/ChangeReleaseGroup': require('../edit/details/historic/ChangeReleaseGroup'),
  'edit/details/historic/ChangeReleaseQuality': require('../edit/details/historic/ChangeReleaseQuality'),
  'edit/details/historic/EditRelationship': require('../edit/details/historic/EditRelationship'),
  'edit/details/historic/EditReleaseAttributes': require('../edit/details/historic/EditReleaseAttributes'),
  'edit/details/historic/EditReleaseLanguage': require('../edit/details/historic/EditReleaseLanguage'),
  'edit/details/historic/EditReleaseName': require('../edit/details/historic/EditReleaseName'),
  'edit/details/historic/EditTrack': require('../edit/details/historic/EditTrack'),
  'edit/details/historic/MergeReleases': require('../edit/details/historic/MergeReleases'),
  'edit/details/historic/MoveDiscId': require('../edit/details/historic/MoveDiscId'),
  'edit/details/historic/MoveRelease': require('../edit/details/historic/MoveRelease'),
  'edit/details/historic/MoveReleaseToReleaseGroup': require('../edit/details/historic/MoveReleaseToReleaseGroup'),
  'edit/details/historic/RemoveDiscId': require('../edit/details/historic/RemoveDiscId'),
  'edit/details/historic/RemoveLabelAlias': require('../edit/details/historic/RemoveLabelAlias'),
  'edit/details/historic/RemoveRelationship': require('../edit/details/historic/RemoveRelationship'),
  'edit/details/historic/RemoveRelease': require('../edit/details/historic/RemoveRelease'),
  'edit/details/historic/RemoveReleases': require('../edit/details/historic/RemoveReleases'),
  'edit/details/historic/RemoveTrack': require('../edit/details/historic/RemoveTrack'),
  'event/EventHeader': require('../event/EventHeader'),
  'instrument/InstrumentHeader': require('../instrument/InstrumentHeader'),
  'label/LabelHeader': require('../label/LabelHeader'),
  'layout/components/Head': require('../layout/components/Head'),
  'layout/components/Header': require('../layout/components/Header'),
  'layout/components/sidebar/AreaSidebar': require('../layout/components/sidebar/AreaSidebar'),
  'layout/components/sidebar/ArtistSidebar': require('../layout/components/sidebar/ArtistSidebar'),
  'layout/components/sidebar/CDStubSidebar': require('../layout/components/sidebar/CDStubSidebar'),
  'layout/components/sidebar/CollectionSidebar': require('../layout/components/sidebar/CollectionSidebar'),
  'layout/components/sidebar/EventSidebar': require('../layout/components/sidebar/EventSidebar'),
  'layout/components/sidebar/InstrumentSidebar': require('../layout/components/sidebar/InstrumentSidebar'),
  'layout/components/sidebar/LabelSidebar': require('../layout/components/sidebar/LabelSidebar'),
  'layout/components/sidebar/PlaceSidebar': require('../layout/components/sidebar/PlaceSidebar'),
  'layout/components/sidebar/RecordingSidebar': require('../layout/components/sidebar/RecordingSidebar'),
  'layout/components/sidebar/ReleaseGroupSidebar': require('../layout/components/sidebar/ReleaseGroupSidebar'),
  'layout/components/sidebar/ReleaseSidebar': require('../layout/components/sidebar/ReleaseSidebar'),
  'layout/components/sidebar/SeriesSidebar': require('../layout/components/sidebar/SeriesSidebar'),
  'layout/components/sidebar/UrlSidebar': require('../layout/components/sidebar/UrlSidebar'),
  'layout/components/sidebar/WorkSidebar': require('../layout/components/sidebar/WorkSidebar'),
  'place/PlaceHeader': require('../place/PlaceHeader'),
  'recording/RecordingHeader': require('../recording/RecordingHeader'),
  'release/ReleaseHeader': require('../release/ReleaseHeader'),
  'release_group/ReleaseGroupHeader': require('../release_group/ReleaseGroupHeader'),
  'series/SeriesHeader': require('../series/SeriesHeader'),
  'static/scripts/artist/components/ArtistCreditRenamer': require('../static/scripts/artist/components/ArtistCreditRenamer'),
  'static/scripts/common/components/Annotation': require('../static/scripts/common/components/Annotation'),
  'static/scripts/common/components/ArtistCreditLink': require('../static/scripts/common/components/ArtistCreditLink'),
  'static/scripts/common/components/CritiqueBrainzReview': require('../static/scripts/common/components/CritiqueBrainzReview'),
  'static/scripts/common/components/Relationship': require('../static/scripts/common/components/Relationship'),
  'static/scripts/common/components/ReleaseEvents': require('../static/scripts/common/components/ReleaseEvents'),
  'static/scripts/common/components/SearchIcon': require('../static/scripts/common/components/SearchIcon'),
  'static/scripts/common/components/TaggerIcon': require('../static/scripts/common/components/TaggerIcon'),
  'static/scripts/common/components/WarningIcon': require('../static/scripts/common/components/WarningIcon'),
  'static/scripts/common/components/WikipediaExtract': require('../static/scripts/common/components/WikipediaExtract'),
  'static/scripts/common/components/WorkArtists': require('../static/scripts/common/components/WorkArtists'),
  'static/scripts/edit/components/AddIcon': require('../static/scripts/edit/components/AddIcon'),
  'static/scripts/edit/components/FormRowNameWithGuessCase': require('../static/scripts/edit/components/FormRowNameWithGuessCase'),
  'static/scripts/edit/components/GuessCaseIcon': require('../static/scripts/edit/components/GuessCaseIcon'),
  'static/scripts/edit/components/InformationIcon': require('../static/scripts/edit/components/InformationIcon'),
  'static/scripts/edit/components/edit/RelationshipDiff': require('../static/scripts/edit/components/edit/RelationshipDiff'),
  'static/scripts/edit/components/edit/ReleaseEventsDiff': require('../static/scripts/edit/components/edit/ReleaseEventsDiff'),
  'static/scripts/recording/RecordingName': require('../static/scripts/recording/RecordingName'),
  'url/UrlHeader': require('../url/UrlHeader'),
  'work/WorkHeader': require('../work/WorkHeader'),
};
