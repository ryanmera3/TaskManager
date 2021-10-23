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
    ProxyState.lists = ProxyState.lists.filter(l => l.id != id)

    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
  }

  confirmDelete() {
    confirm("Are you sure you want to delete")
  }
}

export const listsService = new ListsService()