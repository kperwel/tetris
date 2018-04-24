import { ShapeIterator, transposeTimes, toObject } from "../../utils";
import { SIZE_H, SIZE_V } from "../../config";

import { YELLOW, GREY } from "../../constants/colors";
import * as shapes from "../../constants/shapes";
import SHAPE_COLORS_MAP from "../../constants/shapeColorsMap";

const v_edge = toObject(Array(SIZE_H + 1).fill(YELLOW));
const h_edge = {
  [0]: YELLOW,
  [SIZE_H + 1]: YELLOW
};

const getInitialBorders = () => {
  const borders = [];

  for (let y = 0; y <= SIZE_V + 1; y++) {
    if (y === SIZE_V + 1) {
      borders[y] = { ...v_edge };
    } else {
      borders[y] = { ...h_edge };
    }
  }

  return borders;
};

export default class Board {
  constructor(fields = getInitialBorders()) {
    this.fields = fields;
  }

  addShape({ shape, shapeX, shapeY, rotation }) {
    const rotatedShape = transposeTimes(shapes[shape], rotation);

    for (let { x, y, val } of ShapeIterator(rotatedShape)) {
      if (val) {
        if (!this.fields[y + shapeY]) {
          this.fields[y + shapeY] = {};
        }
        this.fields[y + shapeY][x + shapeX] = SHAPE_COLORS_MAP[shape];
      }
    }
  }

  isFilled() {
    for (let key in this.fields) {
      if (Object.values(this.fields[key]).length >= SIZE_H) {
        return key;
      }
    }

    return false;
  }

  checkRowsAffectedByFreeze({ shape, shapeY, rotation }) {
    const rotatedShape = transposeTimes(shapes[shape], rotation);
    for (let y in rotatedShape) {
      const test = this.checkFullRow(Number(y) + shapeY);
      if (test) {
        return Number(y) + shapeY;
      }
    }

    return false;
  }

  checkFullRow(y) {
    return this.fields[y] && Object.values(this.fields[y]).length >= SIZE_H + 2;
  }

  rowHasAny(y) {
    return this.fields[y] && Object.values(this.fields[y]).length > 2;
  }

  removeRow(y) {
    const fields = [...this.fields];
    fields.splice(y, 1);
    this.fields = [{ ...h_edge }, ...fields];
  }

  isColliding({ shape, shapeX, shapeY, rotation }) {
    const rotatedShape = transposeTimes(shapes[shape], rotation);
    this.isFilled();
    for (let { x, y, val } of ShapeIterator(rotatedShape)) {
      if (
        val &&
        this.fields[shapeY + y] &&
        this.fields[shapeY + y][shapeX + x]
      ) {
        return true;
      }
    }

    return false;
  }
}
