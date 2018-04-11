import Scene from "../Scene";

class Loading extends Scene {
  start() {
    return new Promise(resolve => resolve("No witam!"));
  }
}

export default Loading;
