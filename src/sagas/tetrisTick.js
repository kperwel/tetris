import { takeEvery, put, throttle, all, select } from "redux-saga/effects";
import { SIZE_V, CENTER } from "../config";
import { LOADING_FINISHED } from "../components/AssetsManager/actions";

import {
  TICK,
  TETRIS_TICK,
  tetrisTick,
  startTetrisTicker,
  stopTetrisTicker
} from "../modules/Timer/actions";

import {
  END_GAME,
  SHAPE_FREEZE,
  REQUEST_NEW_SHAPE,
  setShapeY,
  shapeFreeze,
  end,
  requestNewShape,
  removeRow
} from "../modules/Game/actions";

function* checkShapeFreezeEffect() {
  const state = yield select();
  const { board, shape, shapeY, shapeX, shapeRotation } = state.Game;
  // checks if has any frozen tiles on upper edge
  // if so end game
  if (board.rowHasAny(0)) {
    yield all([put(end()), put(stopTetrisTicker())]);
  }

  // check if current frozem shape has fullfieled whole row
  const filledRow = board.checkRowsAffectedByFreeze({
    board,
    shape,
    shapeY,
    rotation: shapeRotation
  });
  if (filledRow) {
    yield put(removeRow(filledRow));
  }

  yield put(requestNewShape());
}

function* moveShapeDown() {
  const state = yield select();
  const { board, shape, shapeY, shapeX, shapeRotation } = state.Game;
  const { tetrisStopped } = state.Timer;
  if (tetrisStopped) {
    return;
  }
  if (
    board.isColliding({
      shape,
      shapeY: shapeY + 1,
      shapeX,
      rotation: shapeRotation
    })
  ) {
    yield put(shapeFreeze());
  } else {
    yield put(setShapeY(state.Game.shapeY + 1));
  }
}

export default function*() {
  yield all([
    throttle(200, TICK, () => put(tetrisTick())),
    takeEvery([TETRIS_TICK], moveShapeDown),
    takeEvery([LOADING_FINISHED], () => put(startTetrisTicker())),
    takeEvery([END_GAME], () => put(stopTetrisTicker())),
    takeEvery([SHAPE_FREEZE], checkShapeFreezeEffect)
  ]);
}
