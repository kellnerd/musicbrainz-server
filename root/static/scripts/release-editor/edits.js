// This file is part of MusicBrainz, the open internet music database.
// Copyright (C) 2013 MetaBrainz Foundation
// Licensed under the GPL version 2, or (at your option) any later version:
// http://www.gnu.org/licenses/gpl-2.0.txt

(function (releaseEditor) {

    var utils = releaseEditor.utils;
    var releaseField = ko.observable().subscribeTo("releaseField", true);


    var releaseEditData = utils.withRelease(MB.edit.fields.release);

    var newMediums = utils.withRelease(function (release) {
        return _.chain(release.mediums())
            .filter(function (medium) { return medium.loaded() });
    }, []);


    releaseEditor.edits = {

        releaseGroup: function (release) {
            var releaseGroup = release.releaseGroup();
            var releaseName = release.name();

            if (releaseGroup.id || !(releaseGroup.name || releaseName)) return [];

            var editData = MB.edit.fields.releaseGroup(releaseGroup);
            editData.name = editData.name || releaseName;
            editData.artist_credit = MB.edit.fields.artistCredit(release.artistCredit);

            return [ MB.edit.releaseGroupCreate(editData) ];
        },

        release: function (release) {
            var newData = releaseEditData();
            var oldData = release.original();
            var edits = [];

            if (!release.id) {
                edits.push(MB.edit.releaseCreate(newData));

            } else if (!_.isEqual(newData, oldData)) {
                newData = _.extend(_.clone(newData), { to_edit: release.id });
                edits.push(MB.edit.releaseEdit(newData, oldData));
            }
            return edits;
        },

        annotation: function (release) {
            var editData = MB.edit.fields.annotation(release);
            var edits = [];

            if (editData.text !== release.annotation.original()) {
                edits.push(MB.edit.releaseAddAnnotation(editData));
            }
            return edits;
        },

        releaseLabel: function (release) {
            var newLabels = _.map(release.labels(), MB.edit.fields.releaseLabel);
            var oldLabels = release.labels.original();
            var max = Math.max(newLabels.length, oldLabels.length);
            var edits = [];

            for (var i = 0; i < max; i++) {
                var newLabel = newLabels[i],
                    oldLabel = oldLabels[i];

                if (oldLabel) {
                    if (!newLabel) {
                        // Delete ReleaseLabel
                        oldLabel = _.omit(oldLabel, "label", "catalogNumber");
                        edits.push(MB.edit.releaseDeleteReleaseLabel(oldLabel));

                    } else if (!_.isEqual(newLabel, oldLabel)) {
                        // Edit ReleaseLabel
                        edits.push(MB.edit.releaseEditReleaseLabel(newLabel));
                    }
                } else if (newLabel) {
                    // Add ReleaseLabel
                    newLabel = _.clone(newLabel);

                    if (newLabel.label || newLabel.catalog_number) {
                        newLabel.release = release.id || null;
                        edits.push(MB.edit.releaseAddReleaseLabel(newLabel));
                    }
                }
            }

            return edits;
        },

        medium: function (release) {
            var newMediumsIDs = newMediums().pluck("id").compact().value();
            var newOrder = [];
            var edits = [];
            var inferTrackDurations = releaseEditor.inferTrackDurationsFromRecordings();

            newMediums().each(function (medium) {
                if (!medium.loaded()) return;

                var newMediumData = MB.edit.fields.medium(medium);
                var oldMediumData = medium.original && medium.original();

                _.each(medium.tracks(), function (track, i) {
                    var trackData = newMediumData.tracklist[i];
                    var newRecording = track.recording();
                    var oldRecording = track.recording.original();

                    if (newRecording) {
                        newRecording = MB.edit.fields.recording(newRecording);

                        if (inferTrackDurations) {
                            trackData.length = newRecording.length || trackData.length;
                        }

                        if (track.updateRecording() && track.differsFromRecording()) {
                            _.extend(newRecording, {
                                name:           trackData.name,
                                artist_credit:  trackData.artist_credit,
                                length:         trackData.length
                            });

                            if (!_.isEqual(newRecording, oldRecording)) {
                                edits.push(MB.edit.recordingEdit(newRecording));
                            }
                        }
                    }
                });

                // The medium already exists
                newMediumData = _.clone(newMediumData);

                if (medium.id) {
                    if (_.isEqual(newMediumData, oldMediumData)) {
                        return;
                    }
                    newOrder.push({
                        medium_id:  medium.id,
                        "old":      oldMediumData.position,
                        "new":      newMediumData.position
                    });

                    newMediumData.to_edit = medium.id;
                    delete newMediumData.position;
                    edits.push(MB.edit.mediumEdit(newMediumData, oldMediumData));
                } else {
                    newMediumData.release = release.id;
                    edits.push(MB.edit.mediumCreate(newMediumData))
                }
            });

            var oldMediumsIDs = $.map(release.mediums(), function (medium) {
                return medium.original && medium.original().id;
            });

            var removedMediums = _.difference(oldMediumsIDs, newMediumsIDs);

            _.each(removedMediums, function (id) {
                edits.push(MB.edit.mediumDelete({ medium: id }));
            });

            var wasReordered = _.any(newOrder, function (order) {
                return order["old"] !== order["new"];
            });

            if (wasReordered) {
                edits.push(
                    MB.edit.releaseReorderMediums({
                        release: release.id,
                        medium_positions: newOrder
                    })
                );
            }

            return edits;
        },

        discID: function (release) {
            var edits = [];

            newMediums().each(function (medium) {
                if (medium.toc && medium.canHaveDiscID()) {
                    edits.push(
                        MB.edit.mediumAddDiscID({
                            medium_id:  medium.id,
                            release:    release.id,
                            cdtoc:      medium.toc
                        })
                    );
                }
            });
            return edits;
        }
    };


    releaseEditor.allEdits = utils.debounce(
        utils.withRelease(function (release) {
            var root = releaseEditor.rootField;

            // Don't generate edits if there are errors, *unless* having a
            // missing edit note is the only error.
            var errorCount = releaseEditor.validation.errorCount();

            if (errorCount > 0 && !(errorCount === 1 && root.editNote.error())) {
                return [];
            }

            return Array.prototype.concat(
                releaseEditor.edits.releaseGroup(release),
                releaseEditor.edits.release(release),
                releaseEditor.edits.releaseLabel(release),
                releaseEditor.edits.medium(release),
                releaseEditor.edits.discID(release),
                releaseEditor.edits.annotation(release)
            );
        }, []),
        1500
    );


    releaseEditor.editPreviews = ko.observableArray([]);
    releaseEditor.loadingEditPreviews = ko.observable(false);


    function editHashTable(edits) { return _.indexBy(edits, "hash") }


    function getPreviews(computedEdits) {
        var previousEditHash = editHashTable(computedEdits.peek());
        var previews = {};

        function refreshPreviews(edits) {
            releaseEditor.editPreviews(_.compact(_.map(edits, getPreview)));
        }

        function getPreview(edit) { return previews[edit.hash] }
        function addPreview(tuple) { previews[tuple[0].hash] = tuple[1] }

        function isNewEdit(edit) {
            return previousEditHash[edit.hash] === undefined;
        }

        ko.computed(function () {
            var edits = computedEdits(),
                newEditHash = editHashTable(edits),
                addedEdits = _.filter(edits, isNewEdit);

            // Removed edits
            _.each(_.values(previousEditHash), function (edit) {
                if (newEditHash[edit.hash] === undefined) {
                    delete previews[edit.hash];
                }
            });

            previousEditHash = newEditHash;

            if (addedEdits.length === 0) {
                refreshPreviews(edits);
                return;
            }

            releaseEditor.loadingEditPreviews(true);

            MB.edit.preview({ edits: addedEdits })
                .done(function (data) {
                    releaseEditor.loadingEditPreviews(false);

                    _.each(_.zip(addedEdits, data.previews), addPreview);

                    refreshPreviews(edits);
                });
        });
    }

    $(function () { getPreviews(releaseEditor.allEdits) });


    releaseEditor.submissionInProgress = ko.observable(false);
    releaseEditor.submissionError = ko.observable();


    function chainEditSubmissions(release, submissions) {
        var root = releaseEditor.rootField;

        var args = {
            as_auto_editor: root.asAutoEditor(),
            edit_note: root.editNote()
        };

        function nextSubmission() {
            var current = submissions.shift();
            if (!current) return;

            var edits = current.edits(release),
                submitted = null;

            if (edits.length) {
                submitted = MB.edit.create($.extend({ edits: edits }, args));
            }

            $.when(submitted)
                .done(function (data) {
                    data && current.callback(data.edits);

                    _.defer(nextSubmission);
                })
                .fail(submissionErrorOccurred);
        }
        nextSubmission();
    }


    function submissionErrorOccurred(data) {
        var response = JSON.parse(data.responseText);

        releaseEditor.submissionError(response.error);
        releaseEditor.submissionInProgress(false);
    }


    releaseEditor.submitEdits = function () {
        if (releaseEditor.submissionInProgress() ||
            releaseEditor.validation.errorCount() > 0) {
            return;
        }

        releaseEditor.submissionInProgress(true);
        var release = releaseField();

        chainEditSubmissions(release, [
            {
                edits: releaseEditor.edits.releaseGroup,

                callback: function (edits) {
                    release.releaseGroup(
                        releaseEditor.fields.ReleaseGroup(edits[0].entity)
                    );
                }
            },
            {
                edits: releaseEditor.edits.release,

                callback: function (edits) {
                    var entity = edits[0].entity;

                    if (entity) {
                        release.id = entity.id;
                        release.gid = entity.gid;
                    }

                    release.original(MB.edit.fields.release(release));
                    releaseField.notifySubscribers(release);
                }
            },
            {
                edits: releaseEditor.edits.releaesLabel,

                callback: function () {
                    release.labels.original(
                        _.map(release.labels.peek(), MB.edit.fields.releaseLabel)
                    );
                }
            },
            {
                edits: releaseEditor.edits.medium,

                callback: function (edits) {
                    var added = _.chain(edits).pluck("entity").compact()
                                    .indexBy("position").value();

                    newMediums().each(function (medium) {
                        var addedData = added[medium.position()];

                        if (addedData) medium.id = addedData.id;

                        medium.original(MB.edit.fields.medium(medium));
                    });

                    newMediums.notifySubscribers(newMediums());
                }
            },
            {
                edits: releaseEditor.edits.discID,

                callback: function () {
                    newMediums().each(function (medium) { delete medium.toc });

                    newMediums.notifySubscribers(newMediums());
                }
            },
            {
                edits: releaseEditor.edits.annotation,

                callback: function () {
                    release.annotation.original(release.annotation());
                }
            },
            {
                edits: function () { return [] },

                callback: function () {
                    window.location.pathname = "/release/" + release.gid;
                }
            }
        ]);
    };

}(MB.releaseEditor = MB.releaseEditor || {}));
