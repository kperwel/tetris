import { LOADING_START } from "./actions";

const defaultState = {
  scene: 1
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case LOADING_START:
      return {
        ...state,
        scene: state.scene + 1
      };
    default:
      return state;
  }
};
