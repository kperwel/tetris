import { Container } from "pixi.js";

import { registerScene } from "../modules/Game/actions";

class Scene extends Container {
  constructor({ subscribe, assetsManager, store }) {
    super();
    this.store = store;
    this.subscribe = subscribe;
    this.assetsManager = assetsManager;
  }
  create() {
    throw Error("Missing create implementation!");
  }
  destroy() {
    throw Error("Missing destroy implementation!");
  }
}

export default Scene;
