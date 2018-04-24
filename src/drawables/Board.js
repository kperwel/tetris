import { Container, Sprite } from "pixi.js";

import { YELLOW } from "../constants/colors";
import * as shapes from "../constants/shapes";

import { transposeTimes, ShapeIterator } from "../utils";

const w = 16;
const h = 16;

class Board extends Container {
  constructor({ assetsManager }) {
    super();
    this.assetsManager = assetsManager;
  }

  setFields(fields) {
    if (!fields) {
      return;
    }
    this.removeChildren();

    for (let { x, y, val } of ShapeIterator(fields)) {
      const sprite = new Sprite(this.assetsManager.get(val).texture);
      sprite.position.y = (y - 1) * h;
      sprite.position.x = (x - 1) * w;
      this.addChild(sprite);
    }
  }
}

export default Board;
