import { appState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawTasks() {
  let template = "";

  appState.tasks.forEach((t) => (template += t.TaskTemplate));
  setHTML("tasksGoHere", template);
}

export class TasksController {
  constructor() {
    appState.on("tasks", _drawTasks);
    this.getTasks();
  }
  async getTasks() {
    try {
      await tasksService.getTasks();
    } catch (error) {
      console.error("[getTasks]", error);
      Pop.error(error);
    }
  }

  async createTask() {
    try {
      console.log("hello");
      // @ts-ignore
      window.event.preventDefault();
      // @ts-ignore
      let form = window.event.target;
      let formData = getFormData(form);
      console.log(formData);
      await tasksService.createTask(formData);
      // @ts-ignore
      form.reset();
    } catch (error) {
      console.error("[createTask]", error);
      Pop.error(error);
    }
  }

  async removeTask(id) {
    try {
      if (
        await Pop.confirm(
          "Are you sure?",
          "This will delete this task permanently!"
        )
      ) {
        await tasksService.removeTask(id);
      }
    } catch (error) {
      console.error("[removeTask]", error);
      Pop.error(error);
    }
  }

  async toggleCompleted(id) {
    try {
      await tasksService.toggleCompleted(id);
    } catch (error) {
      console.error("[toggleCompleted]", error);
      Pop.error(error);
    }
  }
}
