"use strict";

const Chance = require("chance").Chance,
  chance = new Chance();

function getUser() {
    return {
        _id: chance.hash(),
        userName: chance.name()
    };
}

function getAccountPreferences() {
    return {
        dateFormat: "dd/mm/yyyy", 
        timeFormat: "h:MM TT"
    }
}

exports.getUser = getUser;
exports.getAccountPreferences = getAccountPreferences;