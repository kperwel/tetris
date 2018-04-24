import Scene from "../Scene";
import { Text, TextStyle } from "pixi.js";

import { WIDTH, HEIGHT } from "../../config";

export const id = "FINISH";

export default class Finish extends Scene {
  create() {
    const style = new TextStyle({
      fontFamily: "Arial",
      fontSize: 36,
      fontWeight: "bold",
      fill: ["#ffffff"], // gradient
      stroke: "#4a1850",
      wordWrap: true,
      wordWrapWidth: 440
    });

    const basicText = new Text("FINISH!", style);
    basicText.x = WIDTH / 2;
    basicText.y = HEIGHT / 2;

    basicText.pivot.x = basicText.width * 0.5;
    basicText.pivot.y = basicText.height * 0.5;
    this.addChild(basicText);
  }

  destroy() {
    this.clearChildren();
  }

  constructor({ subscribe, dispatch }) {
    super({ subscribe, dispatch, id });
  }
}
