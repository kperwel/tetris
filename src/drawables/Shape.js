import { Container, Sprite } from "pixi.js";

import { YELLOW } from "../constants/colors";
import * as shapes from "../constants/shapes";
import SHAPE_COLORS_MAP from "../constants/shapeColorsMap";

import { transposeTimes, ShapeIterator } from "../utils";

const w = 16;
const h = 16;

class Shape extends Container {
  constructor({ assetsManager, type }) {
    super();
    this.assetsManager = assetsManager;

    if (type) {
      this.setType(type);
    }
  }

  setType(type, rotation = 0) {
    this.removeChildren();
    const shape = transposeTimes(shapes[type], rotation);
    const image = this.assetsManager.get(SHAPE_COLORS_MAP[type]).texture;

    for (let { x, y, val } of ShapeIterator(shape)) {
      if (val) {
        const sprite = new Sprite(image);
        sprite.position.y = (y - 1) * h;
        sprite.position.x = (x - 1) * w;
        this.addChild(sprite);
      }
    }
  }
}

export default Shape;
