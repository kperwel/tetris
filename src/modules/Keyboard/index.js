import { KEY_DOWN, KEY_UP } from "./actions";

const defaultState = {
  buttonPressed: null
};

export default (state = defaultState, { type, payload } = {}) => {
  switch (type) {
    case KEY_DOWN:
      console.log(payload);
      return {
        ...state,
        buttonPressed: payload.button
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
