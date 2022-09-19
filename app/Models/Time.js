export class Time {
  /**
   *
   * @param {{date:string, time:string}} data
   */
  constructor(data) {
    this.date = data.date;
    this.time = data.time;
  }

  get TimeTemplate() {
    return /*html*/ `
    <h1 class="time text-shadow">${this.time}</h1>
    <h5 class="date text-shadow">${this.date}</h5>
    `;
  }
}
