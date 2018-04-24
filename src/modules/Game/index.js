import { CENTER } from "../../config";
import { getRandom } from "../../utils";
import {
  SET_SCENE,
  SET_SHAPE,
  SET_SHAPE_X,
  SET_SHAPE_Y,
  SET_SHAPE_ROTATION,
  SHAPE_FREEZE,
  REQUEST_NEW_SHAPE,
  REMOVE_ROW
} from "./actions";
import * as shapeTypes from "../../constants/shapeTypes";

import Board from "../../components/Board";

const defaultState = {
  activeScene: null,
  shape: getRandom(Object.values(shapeTypes)),
  shapeRotation: 0,
  shapeX: CENTER,
  shapeY: 0,
  board: new Board()
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case SET_SCENE:
      return {
        ...state,
        activeScene: payload.id
      };
    case SET_SHAPE:
      return {
        ...state,
        shape: payload.type
      };
    case SET_SHAPE_X:
      return {
        ...state,
        shapeX: payload.x
      };
    case SET_SHAPE_Y:
      return {
        ...state,
        shapeY: payload.y
      };
    case SET_SHAPE_ROTATION:
      return {
        ...state,
        shapeRotation: payload.rotation
      };
    case REQUEST_NEW_SHAPE:
      return {
        ...state,
        shape: getRandom(Object.values(shapeTypes)),
        shapeRotation: 0,
        shapeX: CENTER,
        shapeY: -2
      };
    case REMOVE_ROW: {
      const board = new Board([...state.board.fields]);
      board.removeRow(payload.y);
      return {
        ...state,
        board
      };
    }
    case SHAPE_FREEZE:
      const board = new Board([...state.board.fields]);

      board.addShape({
        shape: state.shape,
        shapeX: state.shapeX,
        shapeY: state.shapeY,
        rotation: state.shapeRotation
      });

      return {
        ...state,
        board
      };
    default:
      return state;
  }
};
