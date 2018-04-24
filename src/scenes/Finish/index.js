import Scene from "../Scene";
import { Text, TextStyle } from "pixi.js";

import { WIDTH, HEIGHT } from "../../config";

export const id = "FINISH";

const style = {
  fontFamily: "Arial",
  fontSize: 36,
  fontWeight: "bold",
  fill: ["#ffffff"],
  stroke: "#4a1850",
  wordWrap: true,
  wordWrapWidth: 440
};

export default class Finish extends Scene {
  create() {
    const sceneTitleStyle = new TextStyle({
      ...style
    });
    const instructionStyle = new TextStyle({
      ...style,
      fontSize: 12
    });

    const sceneTitle = new Text("FINISH!", sceneTitleStyle);
    const instruction = new Text("Press [r] to restart", instructionStyle);
    sceneTitle.x = WIDTH / 2;
    sceneTitle.y = HEIGHT / 2;
    instruction.x = WIDTH / 2;
    instruction.y = HEIGHT / 2 + 100;

    sceneTitle.pivot.x = sceneTitle.width * 0.5;
    sceneTitle.pivot.y = sceneTitle.height * 0.5;
    instruction.pivot.x = instruction.width * 0.5;
    instruction.pivot.y = instruction.height * 0.5;
    this.addChild(sceneTitle);
    this.addChild(instruction);
  }

  destroy() {
    this.removeChildren();
  }

  constructor({ subscribe, dispatch }) {
    super({ subscribe, dispatch, id });
  }
}
