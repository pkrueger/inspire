import { appState } from "../AppState.js";

class TimeService {
  async getTime() {
    appState.rawTime = await new Date();
    let now = appState.rawTime;

    appState.formattedDate =
      now.getMonth() + "/" + now.getDate() + "/" + now.getFullYear();

    appState.formattedTime =
      (now.getHours() > 12 ? now.getHours() - 12 : now.getHours()) +
      ":" +
      now.getMinutes() +
      " " +
      (now.getHours() >= 12 ? "pm" : "am");
  }
}

export const timeService = new TimeService();
