"use strict";

const moveTicket = require('../lib/moveTicket'),
  expect = require("chai").expect,
  BzDate = require("btrz-modules").BzDate,
  moveTicketHelpers = require("./helpers/moveTicket_helpers"),
  traceHelpers = require("./helpers/trace_helpers");

describe("Move Ticket", () => {

  const changeSet = moveTicketHelpers.getMoveTicketChangeSet();
  const user = traceHelpers.getUser()
  const accountPref = traceHelpers.getAccountPreferences();

  it("should parse the description with the correct values", () => {
    const traceDescription = moveTicket.loadTraceDescription(changeSet, user, accountPref);
    
    expect(traceDescription.values.userName).to.eql(user.userName);
    expect(traceDescription.values.date).to.eql(new BzDate().toString(accountPref.dateFormat));
    expect(traceDescription.values.scheduleDisplayNameOriginal).to.be.eql(changeSet.scheduleDisplayName.originalValue);
    expect(traceDescription.values.scheduleDisplayNameNew).to.eql(changeSet.scheduleDisplayName.newValue);
    expect(traceDescription.values.scheduleDateOriginal).to.eql(new BzDate(changeSet.scheduleDate.originalValue).toString(accountPref.dateFormat));
    expect(traceDescription.values.scheduleDateNew).to.eql(new BzDate(changeSet.scheduleDate.newValue).toString(accountPref.dateFormat));
  });

}); 