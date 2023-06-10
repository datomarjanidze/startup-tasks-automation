## Visible Memory Usage v1.4.0 Documentation

<p align="center">
  <a href="https://www.npmjs.com/package/startup-tasks-automation" target="_blank"><img src="https://img.shields.io/npm/v/startup-tasks-automation.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/startup-tasks-automation" target="_blank"><img src="https://img.shields.io/npm/l/startup-tasks-automation.svg" alt="Package License" /></a>
</p>

### Table of contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage example](#Usage-example)
- [API](#API)
- [Tip](#Tip)

### Description

This package can be used to automate tasks that need to be executed when
you boot your device, for example, open Google Chrome, Slack, some
project in VS Code, etc.

### Installation

```console
npm i startup-tasks-automation
```

### Usage example

```javascript
import { StartupTasksAutomation } from 'startup-tasks-automation'
const startupTasksAutomation = new StartupTasksAutomation([
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
])

startupTasksAutomation.initiateBootSequence()
```

### API

#### `class StartupTasksAutomation`

- Models
  - `ITask`
    ```ts
    interface ITask {
      executable: string
      delay: number
    }
    ```
- Constructor parameters
  - tasks `ITask`
    - executable `string` absolute path to your executable.
    - delay `number` time in milliseconds, in case you want to balance
      device load between tasks execution
- Methods:
  - initiateBootSequence()
    - Returns: void
    - Description: starts tasks execution

### Tip

Above code example can be then transformed as an executable, for example
you can use NPM package called `pkg` in the following manner `pkg
/path/to/my-automation-script.js --targets win` and this will generate
an `exe` file which then can be copied to the folder where startup
executables reside, e.g. on Windows this is `C:/Users/<username>/AppData/
roaming/Microsoft/Windows/Start Menu/Programs/Startup`.
