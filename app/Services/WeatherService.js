import { appState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { SandboxServer } from "./AxiosService.js";

class WeatherService {
  async getWeather() {
    const res = await SandboxServer.get("/weather");

    // console.log(res.data);
    appState.weather = new Weather(res.data);
  }

  toggleTemp() {
    // @ts-ignore
    appState.weather.tempToggle = !appState.weather.tempToggle;
  }
}

export const weatherService = new WeatherService();
