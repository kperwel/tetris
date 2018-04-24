import { TICK, TETRIS_TICK, START_TETRIS, STOP_TETRIS } from "./actions";

const defaultState = {
  tick: 1,
  previousTick: 0,
  tetrisStopped: true,
  tetrisTick: 1,
  previousTetrisTick: 0,
  startTime: window.performance.now(),
  currentTime: window.performance.now()
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case TICK:
      return {
        ...state,
        tick: state.tick + 1,
        previousTick: state.tick,
        currentTime: window.performance.now()
      };
    case TETRIS_TICK:
      return state.tetrisStopped
        ? state
        : {
            ...state,
            tetrisTick: state.tick + 1,
            previousTetrisTick: state.tick
          };
    case START_TETRIS:
      return { ...state, tetrisStopped: false };
    case STOP_TETRIS:
      return { ...state, tetrisStopped: true };
    default:
      return state;
  }
};
