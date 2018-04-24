const getActiveScene = state => state.Game.activeScene;

export default class SceneManager {
  constructor({ subscribe, dispatch, scenes, stage }) {
    this.stage = stage;
    const unSubscribeActiveScene = subscribe(
      "Game.activeScene",
      this.handleSceneChange.bind(this)
    );

    this.onDestroy = () => {
      unSubscribeActiveScene();
    };

    this.scenes = new Map();
    for (let [key, value] of Object.entries(scenes)) {
      this.scenes.set(key, value);
    }
  }

  handleSceneChange(state) {
    this.setScene(this.scenes.get(getActiveScene(state)));
  }

  setScene(scene) {
    if (this.stage.children.length > 0) {
      const currentScene = this.stage.getChildAt(0);
      currentScene.destroy();
      this.stage.removeChildren();
    }
    scene.set;
    scene.create();
    this.stage.addChild(scene);
  }
}
