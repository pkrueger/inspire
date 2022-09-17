import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";

export class WeatherController {
  async getWeather() {
    try {
      await weatherService.getWeather();
    } catch (error) {
      console.error("[getWeather]", error);
      Pop.error(error);
    }
  }
}
