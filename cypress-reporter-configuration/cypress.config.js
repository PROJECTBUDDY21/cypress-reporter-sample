const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "reporter": "cypress-multi-reporters",
    "reporterOptions": {
      "reporterEnabled": "mocha-junit-reporter,mochawesome,cypress-junit-reporter",
      "mochaJunitReporterOptions": {
        "mochaFile": "JUnitResult/mocha-junit-results-[hash].xml",
        "testCaseSwitchClassnameAndName": false
      },
      "mochawesomeReporterOptions": {
        "reportDir": "MochaResult",
        "quiet": true,
        "html": false,
        "json": true,
      },
      "cypressJunitReporterReporterOptions": {
        "mochaFile": 'CypressJUnitResults/results-[hash].xml',
        "toConsole": true,
      }
    }
  }
});
