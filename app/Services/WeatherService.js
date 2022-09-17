import { SandboxServer } from "./AxiosService.js";

class WeatherService {
  async getWeather() {
    const res = await SandboxServer.get("/weather");

    console.log(res.data);
  }
}

export const weatherService = new WeatherService();
