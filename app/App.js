import { BackgroundsController } from "./Controllers/BackgroundsController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TimeController } from "./Controllers/TimeController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  backgroundsController = new BackgroundsController();
  weatherController = new WeatherController();
  timeController = new TimeController();
  quotesController = new QuotesController();
}

window["app"] = new App();
