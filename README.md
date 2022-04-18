## startup-tasks-automation

### Description
This package can be used to automate tasks that need to be executed when
you boot your device, for example, open Google Chrome, Slack, some
project in VS Code, etc.

![language](https://img.shields.io/badge/language-JavaScript-yellow.svg)
![license](https://img.shields.io/badge/license-ISC-green)
[![npm version](https://img.shields.io/npm/v/startup-tasks-automation.svg?style=flat)](https://npmjs.org/package/startup-tasks-automation)
[![npm download](https://img.shields.io/npm/dt/startup-tasks-automation.svg)](https://npmjs.org/package/startup-tasks-automation)

### Installation
```console
npm i startup-tasks-automation
```

### Usage example
```javascript
const { StartupTasksAutomation } = require('startup-tasks-automation') 
const startupTasksAutomation = new StartupTasksAutomation(
  [
    {
      executable: `C:/"Program Files"/Google/Chrome/Application/chrome.exe`,
      delay: 5_000
    },
    {
      executable: `C:/Users/datomarjanidze/AppData/Local/slack/slack.exe`,
      delay: 10_000
    },
    {
      executable: `code C:/Users/datomarjanidze/GitHub/googleapis/nodejs-storage`,
      delay: 15_000
    }
  ]
)

startupTasksAutomation.initiateBootSequence()
```

### Tip
Above code example can be then transformed as an executable, for example
you can use NPM package called `pkg` in the following manner `pkg
/path/to/my-automation-script.js --targets win` and this will generate
an `exe` file which then can be copied to the folder where startup
executables reside, e.g. on Windows this is `C:/Users/<username>/AppData/
roaming/Microsoft/Windows/Start Menu/Programs/Startup`.

### Specs
- `StartupTasksAutomation` class constructor parameters:
  - `tasks {{ executable: string, delay: number }[]}`: `executable` task
  property must be an absolute path to your executable. `delay` task
  property is the time in milliseconds, in case you want to balance
  device load between tasks execution
- `StartupTasksAutomation` class methods:
  - `initiateBootSequence`: Starts tasks execution
