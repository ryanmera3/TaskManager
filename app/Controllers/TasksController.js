
import { tasksService } from "../Services/TasksService.js"

export class TasksController {
  constructor() {
  }

  createTask(lId) {
    console.log(lId)
    window.event.preventDefault()
    const form = window.event.target
    const newTask = {
      // @ts-ignore
      name: form.taskName.value,
      listId: lId
    }
    console.log('Task', newTask)
    tasksService.createTask(newTask)
  }

  removeTask(id) {
    tasksService.removeTask(id)
  }

  isChecked(id) {
    tasksService.isChecked(id)
  }



}