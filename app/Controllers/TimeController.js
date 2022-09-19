import { appState } from "../AppState.js";
import { timeService } from "../Services/TimeService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawTime() {
  setHTML("timeModule", appState.time.TimeTemplate);
}

export class TimeController {
  constructor() {
    this.getTime();
    appState.on("time", _drawTime);
    setInterval(this.getTime, 1000);
  }
  async getTime() {
    try {
      await timeService.getTime();
    } catch (error) {
      console.error("[getTime]", error);
      Pop.error(error);
    }
  }
}
