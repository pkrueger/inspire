import { appState } from "../AppState.js";

export class Task {
  /**
   *
   * @param {{description: string, completed: boolean, id: string}} data
   */
  constructor(data) {
    this.description = data.description;
    this.completed = data.completed;
    this.id = data.id;
  }

  //prettier-ignore
  get TaskTemplate() {
    return /*html*/ `
    <li
      class="task d-flex align-items-center justify-content-between mb-2 ${this.completed ? "order-1" : ""}"
    >
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          name="completed"
          onchange="app.tasksController.toggleCompleted('${this.id}')"
          ${this.completed ? "checked" : ""}
        />
        <label class="form-check-label" for="completed"
          >${this.description}</label
        >
      </div>
      <i
        class="fa-regular fa-square-minus task-delete-button selectable"
        onclick="app.tasksController.removeTask('${this.id}')"
      ></i>
    </li>
    `;
  }
}
