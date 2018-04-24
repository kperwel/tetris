import { extras } from "pixi.js";

export default class Background extends extras.TilingSprite {
  constructor({ image }) {
    super(image, 16, 16);
  }
}
