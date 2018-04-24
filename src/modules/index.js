import { createStore, combineReducers } from "redux";
import Timer from "./Timer";
import Game from "./Game";
import Keyboard from "./Keyboard";

export default combineReducers({
  Timer,
  Game,
  Keyboard
});
