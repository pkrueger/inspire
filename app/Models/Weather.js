export class Weather {
  /**
   *
   * @param {{temp: number, id:number, main:string | object, weather: array}} data
   */
  constructor(data) {
    this.tempInK = Math.round(data.main.temp);
    this.tempInC = Math.round(data.main.temp - 273.15);
    this.tempInF = Math.round((data.main.temp - 273.15) * (9 / 5) + 32);
    this.main = data.weather[0].main;
    this.tempToggle = false;
    this.weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  }

  //prettier-ignore
  get WeatherTemplate() {
    return /*html*/ `
      <div class="weather-container text-center selectable no-select" onclick="app.weatherController.toggleTemp()">
        <div>
          ${this.tempToggle ? this.tempInC : this.tempInF}&deg; ${this.tempToggle ? "C" : "F"}
        </div>
        <div>${this.main}</div>
        <div><img src="${this.weatherIcon}" alt="${this.main} icon"/></div>
      </div>
    `;
  }
}
