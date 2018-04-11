import { createStore, combineReducers } from "redux";
import Animation from "./Animation";
import Renderer from "./Renderer";

export const modules = combineReducers({
  Animation,
  Renderer
});
