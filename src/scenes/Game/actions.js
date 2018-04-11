const GAME_WON = "GAME_WON";
const GAME_LOST = "GAME_LOST";

const LOADING_FINISHED = "LOADING_FINISHED";
const LOADING_START = "LOADING_START";
const LOADING_PROGRESS = "LOADING_PROGRESS";

const FINISH_RESTART = 'FINISH_RESTART'

export const finishRestart() => ({
  type: FINISH_RESTART,
});

export const gameWon = () => ({
  type: GAME_WON
});

export const loadingStart = () => ({
  type: LOADING_START
});

export const loadingProgress = () => ({
  type: LOADING_PROGRESS
});

export const loadingFinished = () => ({
  type: LOADING_FINISHED
});
