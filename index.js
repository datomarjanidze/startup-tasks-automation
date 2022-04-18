const { exec } = require('child_process')

class StartupTasksAutomation {
  constructor(
    tasks /*: {
      executable: string
      delay: number
    }[] */
  ) { this.tasks = tasks }

  initiateBootSequence() /*: void */ {
    this.tasks.forEach(
      (task, index, array) => setTimeout(
        () => {
          exec(
            task.executable,
            (error, stdout, stderr) => console.log(error || stderr || stdout)
          )

          if (index === array.length - 1)
            setTimeout(() => process.exit(), 10e3)
        },
        task.delay
      )
    )
  }
}

module.exports = { StartupTasksAutomation }