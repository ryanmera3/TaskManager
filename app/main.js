import { ListsController } from "./Controllers/ListsController.js";
import { TasksController } from "./Controllers/TasksController.js";

class App {
  // valuesController = new ValuesController();
  tasksController = new TasksController()
  listsController = new ListsController()
}

window["app"] = new App();
