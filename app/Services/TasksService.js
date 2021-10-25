import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { saveState } from "../Utils/LocalStorage.js";

class TasksService {
  constructor() {

  }
  createTask(taskData) {
    const task = new Task(taskData)
    ProxyState.tasks = [...ProxyState.tasks, task]
  }
  removeTask(id) {
    if (window.confirm('Are you sure you want to delete your task?')) {
      console.log("deleting", id)
      ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
    } else {
      console.log('You have chosen to not delete')
    }
  }
  isChecked(id) {
    const found = ProxyState.tasks.find(t => t.id == id)
    found.checked = !found.checked
    ProxyState.tasks = ProxyState.tasks
  }


}

export const tasksService = new TasksService()