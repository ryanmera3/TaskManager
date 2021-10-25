// @ts-nocheck
import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js"
import { loadState, saveState } from "../Utils/LocalStorage.js";


function _draw() {
  const lists = ProxyState.lists
  let template = ''

  lists.forEach(t => template += t.Template)
  document.getElementById('lists').innerHTML = template

}
export class ListsController {
  constructor() {
    console.log('ListController working')
    ProxyState.on('lists', _draw)
    ProxyState.on('lists', saveState)
    ProxyState.on('tasks', _draw)
    ProxyState.on('tasks', saveState)
    loadState()
    _draw()
  }

  createList() {

    window.event.preventDefault()
    const form = window.event.target
    const newList = {
      name: form.name.value,
      color: form.color.value
    }
    console.log(newList)
    listsService.createList(newList)

    form.reset()

  }

  removeList(id) {
    listsService.removeList(id)
  }

  confirmDelete() {
    listsService.confirmDelete()
  }

  // isFinished(id) {
  //   listsService.isFinished(id)
  // }

}