# custom-jasmine-reporter
Jasmine BDD Framework-Custom HTML Reporter

### Background:
This is an attempt at generating custom html reporter for jasmine without using any templating engines such as mustache, handlebar.
HTML report is generated by using java script string literals.

### Example:
```
var Jasmine = require('jasmine');
var customReport = require("./report/customreporter");
var jasmine = new Jasmine();
jasmine.loadConfigFile('./spec/support/jasmine.json');
jasmine.env.clearReporters();
jasmine.addReporter(customReport)
jasmine.execute();
```

### Report:
Styling is through Bootstrap.
