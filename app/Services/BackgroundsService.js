import { appState } from "../AppState.js";
import { SandboxServer } from "./AxiosService.js";

class BackgroundsService {
  async getBackground() {
    let res;
    do {
      res = await SandboxServer.get("/images", {
        params: {
          category: "animals",
          min_width: 1920,
          min_height: 1080,
          safesearch: true,
        },
      });
    } while (!res.data.largeImgUrl);

    console.log(res.data);
    appState.background = res.data;
  }
}

export const backgroundsService = new BackgroundsService();
