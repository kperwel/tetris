import { KEY_DOWN, KEY_UP } from "./actions";

const defaultState = {
  buttonPressed: null
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case KEY_DOWN:
      return {
        ...state,
        buttonPressed: action.payload.button
      };
    case KEY_UP:
      return {
        ...state,
        buttonPressed: null
      };
    default:
      return state;
  }
};
