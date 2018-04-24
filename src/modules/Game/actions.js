export const SET_SCENE = "GAME/SET_SCENE";
export const START_GAME = "GAME/START";
export const END_GAME = "GAME/END";
export const SET_SHAPE = "GAME/SET_SHAPE";
export const SET_SHAPE_X = "GAME/SET_SHAPE_X";
export const SET_SHAPE_Y = "GAME/SET_SHAPE_Y";
export const SET_SHAPE_ROTATION = "GAME/SET_SHAPE_ROTATION";
export const SHAPE_FREEZE = "GAME/SHAPE_FREEZE";
export const REQUEST_NEW_SHAPE = "GAME/REQUEST_NEW_SHAPE";
export const REMOVE_ROW = "GAME/REMOVE_ROW";

export const end = () => ({
  type: END_GAME
});

export const startGame = () => ({
  type: START_GAME
});

export const setScene = id => ({
  type: SET_SCENE,
  payload: {
    id
  }
});

export const setShape = type => ({
  type: SET_SHAPE,
  payload: {
    type
  }
});

export const setShapeX = x => ({
  type: SET_SHAPE_X,
  payload: {
    x
  }
});

export const setShapeRotation = rotation => ({
  type: SET_SHAPE_ROTATION,
  payload: {
    rotation
  }
});

export const setShapeY = y => ({
  type: SET_SHAPE_Y,
  payload: {
    y
  }
});

export const shapeFreeze = () => ({
  type: SHAPE_FREEZE
});

export const requestNewShape = () => ({
  type: REQUEST_NEW_SHAPE
});

export const removeRow = y => ({
  type: REMOVE_ROW,
  payload: { y }
});
