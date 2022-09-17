import { BackgroundsController } from "./Controllers/BackgroundsController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  backgroundsController = new BackgroundsController();
  weatherController = new WeatherController();
}

window["app"] = new App();
