import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";

class ListsService {
  constructor() {

  }
  createList(listData) {
    const list = new List(listData)
    ProxyState.lists = [...ProxyState.lists, list]
  }
  removeList(id) {
    if (window.confirm()) {

      ProxyState.lists = ProxyState.lists.filter(l => l.id != id)
      ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
      console.log("deleting", id);
    } else {
      console.log('You have chosen to not delete');
    }

  }

  confirmDelete() {
    confirm("Are you sure you want to delete")
  }

  isFinished(id) {

    const quant = ProxyState.tasks.find(t => t.id == id)

    if (quant.checked && quant.quantity == 0) {
      quant.quantity++
      quant.quantity == quant.quantity
      ProxyState.tasks = ProxyState.tasks
      console.log(quant.quantity)
    }
  }
}



export const listsService = new ListsService()