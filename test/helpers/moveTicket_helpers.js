"use strict";

function getMoveTicketChangeSet() {
  return {
    scheduleDisplayName: {originalValue: "Morning", newValue: "Evening"},
    scheduleDate: {originalValue: "2017-02-15", newValue: "2017-02-16"}
  };
}

exports.getMoveTicketChangeSet = getMoveTicketChangeSet;
