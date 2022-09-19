import { appState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { SandboxServer } from "./AxiosService.js";

class TasksService {
  async getTasks() {
    const res = await SandboxServer.get("/pkrueger/todos");

    appState.tasks = res.data.map((t) => new Task(t));
    // console.log(res.data);
  }

  async createTask(formData) {
    const res = await SandboxServer.post("/pkrueger/todos", formData);
    console.log(res.data);
    appState.tasks = [...appState.tasks, new Task(res.data)];
  }

  async removeTask(id) {
    await SandboxServer.delete(`/pkrueger/todos/${id}`);
    appState.tasks = appState.tasks.filter((t) => t.id != id);
  }

  async toggleCompleted(id) {
    let task = appState.tasks.find((t) => t.id == id);

    if (task) {
      task.completed = !task.completed;
      const res = await SandboxServer.put(`/pkrueger/todos/${id}`, {
        completed: task.completed,
      });

      const index = appState.tasks.findIndex((t) => t.id == id);
      appState.tasks.splice(index, 1, new Task(res.data));
      appState.emit("tasks");
    }
  }

  countTasks() {
    let counter = 0;

    for (let task of appState.tasks) {
      if (!task.completed) {
        counter++;
      }
    }

    appState.tasksIncomplete = counter;
  }
}

export const tasksService = new TasksService();
