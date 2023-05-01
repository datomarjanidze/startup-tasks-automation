import { exec } from 'node:child_process'

interface ITask {
  executable: string
  delay: number
}

class StartupTasksAutomation {
  tasks: ITask[]

  constructor(tasks: ITask[]) {
    this.tasks = tasks
  }

  initiateBootSequence(): void {
    this.tasks.forEach((task: ITask, index: number, array: ITask[]) =>
      setTimeout(() => {
        exec(task.executable, (error, stdout, stderr) =>
          console.log(error || stderr || stdout)
        )

        if (index === array.length - 1) setTimeout(() => process.exit(), 10e3)
      }, task.delay)
    )
  }
}

export { StartupTasksAutomation }
