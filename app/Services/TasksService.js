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
    console.log("deleting", id)
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
  }
  isChecked(id) {
    const found = ProxyState.tasks.find(t => t.id == id)
    found.checked = !found.checked
    ProxyState.tasks = ProxyState.tasks
  }


}

export const tasksService = new TasksService()