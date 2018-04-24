import { takeEvery, put, all } from "redux-saga/effects";

import { LOADING_FINISHED } from "../components/AssetsManager/actions";

import {
  setScene,
  START_GAME,
  RESTART_REQUEST,
  END_GAME
} from "../modules/Game/actions";
import { stopTetrisTicker } from "../modules/Timer/actions";

import { id as gameSceneId } from "../scenes/Game";
import { id as loadingSceneId } from "../scenes/Loading";
import { id as finishSceneId } from "../scenes/Finish";

function* showFinshScene() {
  yield all([put(setScene(finishSceneId)), put(stopTetrisTicker())]);
}

export default function*() {
  yield all([
    takeEvery([LOADING_FINISHED, RESTART_REQUEST], () =>
      put(setScene(gameSceneId))
    ),
    takeEvery([START_GAME], () => put(setScene(loadingSceneId))),
    takeEvery([END_GAME], showFinshScene)
  ]);
}
