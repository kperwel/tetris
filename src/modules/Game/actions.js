const WON = "GAME/WON";
const LOST = "GAME/LOST";

const PAUSE = "GAME/PAUSE";

const LOADING_FINISHED = "GAME/LOADING_FINISHED";
const LOADING_START = "GAME/LOADING_START";
const LOADING_PROGRESS = "GAME/LOADING_PROGRESS";

const RESTART = 'GAME/RESTART'

export const restart() => ({
  type: RESTART,
});

export const lost = () => ({
  type: LOST
});
export const pause = () => ({
  type: PAUSE
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
