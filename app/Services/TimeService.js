import { appState } from "../AppState.js";
import { Time } from "../Models/Time.js";

class TimeService {
  async getTime() {
    appState.rawTime = await new Date();
    let now = appState.rawTime;

    appState.formattedDate =
      now.getMonth() + "/" + now.getDate() + "/" + now.getFullYear();

    appState.formattedTime =
      (now.getHours() > 12 ? now.getHours() - 12 : now.getHours()) +
      ":" +
      (now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes()) +
      " " +
      (now.getHours() >= 12 ? "pm" : "am");

    appState.time = new Time({
      date: appState.formattedDate,
      time: appState.formattedTime,
    });
  }
}

export const timeService = new TimeService();
