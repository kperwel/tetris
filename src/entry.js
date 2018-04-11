import { Application } from "pixi.js";

import { createStore } from "redux";
import { reducers } from "./modules";

const store = createStore(reducers);

import "./index.html";

import LoadingScene from "./scenes/Loading";
import GameScene from "./scenes/Game";
import FinishScene from "./scenes/Finish";

import { WIDTH, HEIGHT } from "./config";

const loadingScene = new LoadingScene();
const gameScene = new GameScene();
const finishScene = new FinishScene();

let app = new Application({ width: 800, height: 600 });
document.body.appendChild(app.view);

(async () => {
  const l = await loadingScene.start();
  const g = await gameScene.start();
  const s = await finishScene.start();

  console.log(l, g, s);
})();
