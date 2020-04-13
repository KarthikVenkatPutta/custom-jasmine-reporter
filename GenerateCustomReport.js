var Jasmine = require('jasmine');
var customReport = require("./report/customreporter");
var jasmine = new Jasmine();

jasmine.loadConfigFile('./spec/support/jasmine.json');
jasmine.env.clearReporters();
jasmine.addReporter(customReport)
jasmine.execute();