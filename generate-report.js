const reporter = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap',
    jsonFile: 'cucumber-report.json',
    output: 'cucumber-html-report/index.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "Test Environment": "PHPTravels",
        "Browser": "Chrome",
        "Platform": "Windows"
    }
};

reporter.generate(options);