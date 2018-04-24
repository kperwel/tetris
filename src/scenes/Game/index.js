import { TextStyle, Text } from "pixi.js";
import Scene from "../Scene";
import { lerp } from "../../utils";

export const id = "GAME";

import { WIDTH, HEIGHT } from "../../config";

import Background from "../../drawables/Background";
import Shape from "../../drawables/Shape";
import Map from "../../drawables/Board";

import { GREY, YELLOW } from "../../constants/colors";
import { Z } from "../../constants/shapeTypes";

const getShape = state => state.Game.shape;
const getNextShape = state => state.Game.next;
const getBoard = state => state.Game.board;
const getShapeRotation = state => state.Game.shapeRotation;
const getShapeX = state => state.Game.shapeX;
const getShapeY = state => state.Game.shapeY;

export default class Game extends Scene {
  create() {
    const background = new Background({
      image: this.assetsManager.get(GREY).texture
    });

    background.width = WIDTH;
    background.height = HEIGHT;

    this.addChild(background);
    this.addChild(this.shape);
    this.addChild(this.preview);
    this.addChild(this.board);

    this.setShapeType(getShape(this.store.getState()));
    this.setBoard(getShape(this.store.getState()));

    this.preview.position.x = 32;
    this.preview.position.y = 32;
    this.preview.alpha = 0.5;
    this.preview.setType(getNextShape(this.store.getState()));

    this.moveShape({
      x: getShapeX(this.store.getState()),
      y: getShapeY(this.store.getState())
    });

    this.unsub = [
      this.subscribe("Game.shapeX", state =>
        this.moveShape({ x: getShapeX(state) })
      ),
      this.subscribe("Game.shapeY", state =>
        this.moveShape({ y: getShapeY(state) })
      ),
      this.subscribe("Game.shape", state => this.setShapeType(getShape(state))),
      this.subscribe("Game.next", state =>
        this.setPreviewShapeType(getNextShape(state))
      ),
      this.subscribe("Game.board", state => this.setBoard(getBoard(state))),
      this.subscribe("Game.shapeRotation", state =>
        this.setShapeType(getShape(state), getShapeRotation(state))
      )
    ];
  }
  moveShape({ x, y }) {
    if (x) {
      this.shape.position.x = x * 16;
    }
    if (y) {
      this.shape.position.y = y * 16;
    }
  }
  setShapeType(shapeType, rotation) {
    this.shape.setType(shapeType, rotation);
  }

  setPreviewShapeType(shapeType, rotation) {
    this.preview.setType(shapeType, rotation);
  }

  setBoard({ fields }) {
    this.board.setFields(fields);
  }

  destroy() {
    this.removeChildren();

    for (let unsub of this.unsub) {
      unsub();
    }
  }

  constructor({ subscribe, assetsManager, ...args }) {
    super({ subscribe, assetsManager, ...args });
    this.shape = new Shape({ assetsManager });
    this.preview = new Shape({ assetsManager });
    this.board = new Map({ assetsManager });
  }
}
