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
    <h1>${this.time}</h1>
    <h5>${this.date}</h5>
    `;
  }
}
