import { BackgroundsController } from "./Controllers/BackgroundsController.js";
import { TimeController } from "./Controllers/TimeController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  backgroundsController = new BackgroundsController();
  weatherController = new WeatherController();
  timeController = new TimeController();
}

window["app"] = new App();
