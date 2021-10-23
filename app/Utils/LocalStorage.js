import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js"
import { Task } from "../Models/Task.js"


export function saveState() {

  localStorage.setItem('TaskApp', JSON.stringify({
    lists: ProxyState.lists,
    tasks: ProxyState.tasks
  }))
}

export function loadState() {

  let data = JSON.parse(localStorage.getItem('TaskApp'))
  console.log("loaded data", data)

  if (data != null) {
    ProxyState.lists = data.lists.map(l => new List(l))
    ProxyState.tasks = data.tasks.map(t => new Task(t))
  }
}