import { generateId } from "../Utils/generateId.js";
import { ProxyState } from "../AppState.js";


export class Task {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.listId = data.listId
    this.checked = data.checked || false
    this.quantity = data.quantity
  }
  get Template() {
    return `
    <div class="form-check pb-2">
                
                <input class="form-check-input" type="checkbox" id="flexCheckDefault" onclick="app.tasksController.isChecked('${this.id}')" ${this.checked ? 'checked' : " "}>

        ${this.name} - <button type="button" class="btn btn-danger" onclick = "app.tasksController.removeTask('${this.id}') ; app.listsController.confirmDelete()" formnovalidate > Delete </button >

                </div >
      `
  }

}