export class Weather {
  /**
   *
   * @param {{temp: number, id:number, }} data
   */
  constructor(data) {
    this.tempInK = Math.round(data.temp);
    this.tempInC = Math.round(data.temp - 273.15);
    this.tempInF = Math.round((data.temp - 273.15) * (9 / 5) + 32);
  }
}
