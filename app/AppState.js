import { EventEmitter } from "./Utils/EventEmitter.js";
import { isValidProp } from "./Utils/isValidProp.js";
import { loadState } from "./Utils/Store.js";

class AppState extends EventEmitter {
  background = null;

  /** @type {import('./Models/Weather').Weather | null} */
  weather = null;

  rawTime;
  formattedTime = "";
  formattedDate = "";
  time;

  /** @type {import('./Models/Quote').Quote | null} */
  quote = null;
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, value) {
    isValidProp(target, prop);
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});
