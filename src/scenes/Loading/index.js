import { Text } from "pixi.js";
import Scene from "../Scene";

import { WIDTH, HEIGHT } from "../../config";

export const id = "LOADING";

export default class Loading extends Scene {
  create() {
    const style = new PIXI.TextStyle({
      fontFamily: "Arial",
      fontSize: 36,
      fontWeight: "bold",
      fill: ["#ffffff"], // gradient
      stroke: "#4a1850",
      wordWrap: true,
      wordWrapWidth: 440
    });

    const basicText = new Text("Loading...", style);
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
