"use strict";

const BzDate = require("btrz-modules").BzDate;

const lexiconKey = "traceMoveTicketDescription";

function loadLabelKey() {
  return "ticketMoved";
}

function loadTraceDescription(changeSet, user, accountPref) {
  const today = new BzDate().toString(accountPref.dateFormat);
  const scheduleDateOld = new BzDate(changeSet.scheduleDate.originalValue).toString(accountPref.dateFormat);
  const scheduleDateNewValue = new BzDate(changeSet.scheduleDate.newValue).toString(accountPref.dateFormat);

  const values = {
    userName: user.userName,
    date: today,
    scheduleDisplayNameOriginal: changeSet.scheduleDisplayName.originalValue,
    scheduleDateOriginal: scheduleDateOld,
    scheduleDisplayNameNew: changeSet.scheduleDisplayName.newValue,
    scheduleDateNew: scheduleDateNewValue
  };

  return {
    lexiconKey,
    values
  }
}

exports.loadLabelKey = loadLabelKey;
exports.loadTraceDescription = loadTraceDescription;

// Ticket moved by {{user}} on {{date}} from {{scheduleDisplayNameOriginal}} {{scheduleDateOriginal}} to {{scheduleDisplayNameNew}} {{scheduleDateNew}}