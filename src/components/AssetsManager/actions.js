export const LOADING_FINISHED = "LOADING/FINISHED";
export const LOADING_PROGRESS = "LOADING/PROGRESS";
export const LOADING_START = "LOADING/START";
export const ADD_ASSET = "LOADING/ADD_ASSET";

export const addAsset = (assetName, assetPath) => ({
  type: ADD_ASSET,
  payload: {
    name,
    path
  }
});

export const loadingProgress = assetName => ({
  type: LOADING_PROGRESS,
  payload: {
    assetName
  }
});

export const loadingStart = () => ({
  type: LOADING_START
});

export const loadingFinished = assetName => ({
  type: LOADING_FINISHED,
  payload: {
    assetName
  }
});
