import { generateId } from "../Utils/generateId.js";
import { ProxyState } from "../AppState.js";




export class List {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.color = data.color
    this.quantity = 0
  }
  get Template() {
    return `
    
          <div class="col-md-4">
            <div class="card mt-3">
            
              <div class="card-header text-center text-light txt-shadow " style="background-color:${this.color}">
              ${this.name}  

              </div>
              <button class="btn btn-danger" onclick="app.listsController.removeList('${this.id}')">Delete </button>
              <div class="card-body" >
              <p id="quant"></p>
              <b>Tasks</b>
              <form onsubmit="app.tasksController.createTask('${this.id}') ">
                    ${this.getTasks()}
                <div class="input-group mb-3 mt-1">
                 
                  <input type="text" class="form-control" placeholder="Add to task list"
                    aria-label="Add to task list" aria-describedby="basic-addon2" name="taskName" minlength="3" maxlength="50" required>
                  <div class="input-group-append">
                  
                    <button class="btn btn-outline-secondary" type="submit">Add Task</button>
                    
                  </div>
                  
                </div>
                </form>
              </div>
            </div>
          </div>
          
    `
  }
  getTasks() {
    const lists = ProxyState.tasks.filter(t => this.id == t.listId)
    let template = ''

    lists.forEach(l => {
      template += l.Template
    })
    return template
  }

}