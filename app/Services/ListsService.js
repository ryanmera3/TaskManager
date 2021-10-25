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
    if (window.confirm('Are you sure you want to delete your list?')) {

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

  // isFinished(id) {
  //   const quant = ProxyState.tasks.find(t => t.id == id)
  //   const quantList = ProxyState.lists.find(t => t.id)
  //   let totalQuant = quantList.totalQuant
  //   if (quant.checked) {
  //     totalQuant++
  //     ProxyState.tasks = ProxyState.tasks
  //     console.log("test", totalQuant, quantList.quantity)
  //   } else {
  //     console.log(totalQuant)
  //   }
  // }
}



export const listsService = new ListsService()