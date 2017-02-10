"use strict";

const trace = require('../lib/trace'),
  moveTicket = require("../lib/moveTicket"),
  expect = require("chai").expect,
  BzDate = require("btrz-modules").BzDate,
  moveTicketHelpers = require("./helpers/moveTicket_helpers"),
  traceHelpers = require("./helpers/trace_helpers");

describe("Trace", () => {

  const accountPref = traceHelpers.getAccountPreferences();
  const user = traceHelpers.getUser();

  it("#buildTrace", () => {
    const resultTrace = trace.buildTrace(user, "", "", accountPref);
    expect(resultTrace.userId).to.be.eql(user._id);
    expect(resultTrace.createdAt).to.be.contain(new BzDate().toString(accountPref.dateFormat));
  });

  context("#moveTicketTrace", () => {
    const changeSet = moveTicketHelpers.getMoveTicketChangeSet();

    it("should create the audit trace for the move ticket action", () => {
      const resultTrace = trace.moveTicketTrace(changeSet, user, accountPref);

      expect(resultTrace.label).to.be.eql(moveTicket.loadLabelKey());
      
      expect(resultTrace.description.lexiconKey).to.not.be.undefined;
      expect(resultTrace.description.values.userName).to.eql(user.userName);
      expect(resultTrace.description.values.date).to.eql(new BzDate().toString(accountPref.dateFormat));
      expect(resultTrace.description.values.scheduleDisplayNameOriginal).to.be.eql(changeSet.scheduleDisplayName.originalValue);
      expect(resultTrace.description.values.scheduleDisplayNameNew).to.eql(changeSet.scheduleDisplayName.newValue);
      expect(resultTrace.description.values.scheduleDateOriginal).to.eql(new BzDate(changeSet.scheduleDate.originalValue).toString(accountPref.dateFormat));
      expect(resultTrace.description.values.scheduleDateNew).to.eql(new BzDate(changeSet.scheduleDate.newValue).toString(accountPref.dateFormat));

      expect(resultTrace.userId).to.be.eql(user._id.toString());
      expect(resultTrace.createdAt).to.be.contain(new BzDate().toString(accountPref.dateFormat));
    });
  });

});