import { appState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawWeather() {
  // @ts-ignore
  setHTML("weatherModule", appState.weather.WeatherTemplate);
}

export class WeatherController {
  constructor() {
    appState.on("weather", _drawWeather);
    this.getWeather();
    // @ts-ignore
  }

  async getWeather() {
    try {
      await weatherService.getWeather();
    } catch (error) {
      console.error("[getWeather]", error);
      Pop.error(error);
    }
  }

  toggleTemp() {
    weatherService.toggleTemp();
    _drawWeather();
  }
}
