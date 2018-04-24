import { UP, DOWN, LEFT, RIGHT } from "../../constants/keys";

import { keyDown, keyUp } from "../../modules/Keyboard/actions";

const KEY_ACTION_MAP = {
  37: LEFT,
  39: RIGHT,
  38: UP,
  40: DOWN
};

export default class KeyboardManager {
  constructor({ store }) {
    this.store = store;
    window.addEventListener("keydown", this.onKeyDown.bind(this), false);
    window.addEventListener("keyup", this.onKeyUp.bind(this), false);
  }

  onKeyDown(event) {
    this.store.dispatch(keyDown(KEY_ACTION_MAP[event.keyCode]));
  }

  onKeyUp(event) {
    this.store.dispatch(keyUp(KEY_ACTION_MAP[event.keyCode]));
  }
}
