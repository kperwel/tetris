import { LEFT, RIGHT, TOP, BOTTOM } from "../../constants/keys";

export const KEY_DOWN = "KEYBOARD/KEY_DOWN";
export const KEY_UP = "KEYBOARD/KEY_UP";

export const keyDown = button => ({
  type: KEY_DOWN,
  payload: { button }
});

export const keyUp = () => ({
  type: KEY_UP
});
