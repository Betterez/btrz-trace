"use strict";

const BzDate = require("btrz-modules").BzDate,
  moveTicket = require('./moveTicket');

function buildTrace(user, labelKey, traceDescription, accountPref) {
  return {
    label: labelKey,
    description: traceDescription,
    userId: user._id.toString(),
    createdAt: new BzDate().toString(`${accountPref.dateFormat} ${accountPref.timeFormat}`)
  };
}

function moveTicketTrace(changeSet, user, accountPref) {
  const labelKey = moveTicket.loadLabelKey();
  const moveTicketDescription = moveTicket.loadTraceDescription(changeSet, user, accountPref);
  
  return buildTrace(user, labelKey, moveTicketDescription, accountPref);
}

exports.moveTicketTrace = moveTicketTrace;
exports.buildTrace = buildTrace;