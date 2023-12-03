const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "reporter": "cypress-multi-reporters",
  "reporterOptions": {
    "reporterEnabled": "mocha-junit-reporter,mochawesome",
    "mochaJunitReporterOptions": {
      "mochaFile": "JUnitResult/test.xml",
      "testCaseSwitchClassnameAndName": false
    },
    "mochawesomeReporterOptions": {
      "reportDir": "MochaResult",
      "quiet": true,
      "html":false,
      "json": true,
    },
  }
}
});
