import { Application, ticker } from "pixi.js";
import "./index.html";

import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import initSubscriber from "redux-subscriber";

import { WIDTH, HEIGHT } from "./config";

import * as colors from "./constants/colors";

import reducers from "./modules";

import sceneTransitions from "./sagas/scenesTransitions";
import tetrisTick from "./sagas/tetrisTick";
import keyboardHandling from "./sagas/keyboard";

import LoadingScene, { id as loadingSceneId } from "./scenes/Loading";
import GameScene, { id as gameSceneId } from "./scenes/Game";
import FinishScene, { id as finishSceneId } from "./scenes/Finish";

import SceneManager from "./components/SceneManager";
import AssetsManager from "./components/AssetsManager";
import KeyboardManager from "./components/KeyboardManager";

import { tick, TICK } from "./modules/Timer/actions";
import { startGame } from "./modules/Game/actions";

const loggerMiddleware = createLogger({
  predicate: (_, action) => action.type !== TICK
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
const subscribe = initSubscriber(store);

sagaMiddleware.run(sceneTransitions);
sagaMiddleware.run(tetrisTick);
sagaMiddleware.run(keyboardHandling);

const assetsManager = new AssetsManager({
  store,
  assets: {
    [colors.BLUE]: require("./assets/block_blue.png"),
    [colors.CYAN]: require("./assets/block_cyan.png"),
    [colors.GREEN]: require("./assets/block_green.png"),
    [colors.ORANGE]: require("./assets/block_orange.png"),
    [colors.PURPLE]: require("./assets/block_purple.png"),
    [colors.RED]: require("./assets/block_red.png"),
    [colors.YELLOW]: require("./assets/block_yellow.png"),
    [colors.GREY]: require("./assets/background.png")
  }
});

const keyboardManager = new KeyboardManager({ store });

const app = new Application({ width: WIDTH, height: HEIGHT });

const loading = new LoadingScene({ store, assetsManager, subscribe });
const game = new GameScene({ store, assetsManager, subscribe });
const finish = new FinishScene({ store, assetsManager, subscribe });

const sceneManager = new SceneManager({
  stage: app.stage,
  subscribe,
  dispatch: store.dispatch,
  scenes: {
    [loadingSceneId]: loading,
    [gameSceneId]: game,
    [finishSceneId]: finish
  }
});

const t = new ticker.Ticker();
store.dispatch(tick());

t.add(dt => {
  store.dispatch(tick());
});

document.body.appendChild(app.view);

t.start();
assetsManager.startLoading();

window.dispatcher = store.dispatch;
