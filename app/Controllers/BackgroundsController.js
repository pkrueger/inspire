import { appState } from "../AppState.js";
import { backgroundsService } from "../Services/BackgroundsService.js";
import { Pop } from "../Utils/Pop.js";

function _setBackground() {
  // @ts-ignore
  document.getElementById(
    "backgroundGoHere"
    // @ts-ignore
  ).style.backgroundImage = `url(${appState.background.largeImgUrl})`;
}

export class BackgroundsController {
  constructor() {
    this.getBackground();
    appState.on("background", _setBackground);
  }

  async getBackground() {
    try {
      await backgroundsService.getBackground();
    } catch (error) {
      console.error("[getBackground]", error);
      Pop.error(error);
    }
  }
}
