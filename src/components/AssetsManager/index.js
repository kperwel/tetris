import { loaders } from "pixi.js";

import { loadingProgress, loadingFinished, loadingStart } from "./actions";

export default class AssetsManager {
  constructor({ store, assets }) {
    this.loader = new loaders.Loader();
    this.store = store;

    for (let [name, asset] of Object.entries(assets)) {
      this.loader.add(name, asset);
    }

    this.loader.onProgress.add(() => this.store.dispatch(loadingProgress()));
  }

  startLoading() {
    this.loader.load(this.finished.bind(this));
    this.store.dispatch(loadingStart());
  }

  finished(loader, resources) {
    this.store.dispatch(loadingFinished());
  }

  get(name) {
    return this.loader.resources[name];
  }
}
