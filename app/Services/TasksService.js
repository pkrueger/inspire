import { appState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { SandboxServer } from "./AxiosService.js";

class TasksService {
  async getTasks() {
    const res = await SandboxServer.get("/pkrueger/todos");

    appState.tasks = res.data.map((t) => new Task(t));
    console.log(res.data);
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

  async toggleCompleted(id) {}
}

export const tasksService = new TasksService();
