export const TICK = "TIMER/TICK";
export const TETRIS_TICK = "TIMER/TETRIS_TICK";

export const STOP_TETRIS = "TIMER/STOP_TETRIS";
export const START_TETRIS = "TIMER/START_TETRIS";

export const tick = () => ({ type: TICK });
export const tetrisTick = () => ({ type: TETRIS_TICK });
export const startTetrisTicker = () => ({ type: START_TETRIS });
export const stopTetrisTicker = () => ({ type: STOP_TETRIS });
