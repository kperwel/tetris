import { takeEvery, select, put, all } from "redux-saga/effects";

import { LOADING_FINISHED } from "../components/AssetsManager/actions";

import {
  setShapeX,
  setShapeRotation,
  requestRestart
} from "../modules/Game/actions";
import { KEY_DOWN } from "../modules/Keyboard/actions";

import { LEFT, RIGHT, UP, DOWN, RESTART } from "../constants/keys";
import { SIZE_H } from "../config";

import { tetrisTick, startTetrisTicker, tick } from "../modules/Timer/actions";

function* moveShape({ payload }) {
  const state = yield select();
  const { board, shape, shapeY, shapeX, shapeRotation } = state.Game;

  switch (payload.button) {
    case LEFT:
      if (
        !board.isColliding({
          shape,
          shapeY,
          shapeX: shapeX - 1,
          rotation: shapeRotation
        })
      ) {
        yield put(setShapeX(state.Game.shapeX - 1));
      }
      break;
    case RIGHT:
      if (
        !board.isColliding({
          shape,
          shapeY,
          shapeX: shapeX + 1,
          rotation: shapeRotation
        })
      ) {
        yield put(setShapeX(state.Game.shapeX + 1));
      }
      break;
    case UP:
      if (
        !board.isColliding({
          shape,
          shapeY,
          shapeX,
          rotation: shapeRotation + 1 % 3
        })
      ) {
        yield put(setShapeRotation(state.Game.shapeRotation + 1 % 3));
      }
      break;
    case RESTART:
      yield all([put(requestRestart()), put(startTetrisTicker()), put(tick())]);
      break;
    case DOWN:
      yield put(tetrisTick());
      break;
  }
}

export default function*() {
  yield takeEvery([KEY_DOWN], moveShape);
}
