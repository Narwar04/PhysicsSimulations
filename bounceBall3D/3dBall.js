// ITEMS
var threeScene;
var renderer;
var camera;
var cameraControl;

// simulation =================================================================

function simulate() {}

function initThreeScene() {
  threeScene = new THREE.Scence();

  //Lights
  threeScene.add(new threeScene.AmbientLight(0x505050));
  threeScene.fog = new THREE.Fog(0x000000, 0, 15);

  var spotLight = new THREE.SpotLight(0xffffff);
  spotLight.angle = Math.PI / 5;
  spotLight.penumbra = 0.2;
  spotLight.position.set(2, 3, 3);
  spotLight.castShadow = true;
  spotLight.shadow.camera.near = 3;
  spotLight.shadow.camera.far = 10;
  spotLight.shadow.mapSize.width = 1024;
  spotLight.shadow.mapSize.height = 1024;
  threeScene.add(spotLight);

  var dirLight = new THREE.DirectionalLight(0x55505a, 1);
  dirLight.position.set(0, 3, 0);
  dirLight.castShadow = true;
  dirLight.shadow.camera.near = 1;
  dirLight.shadow.camera.far = 10;

  dirLight.shadow.camera.right = 1;
  dirLight.shadow.camera.left = -1;
  dirLight.shadow.camera.top = 1;
  dirLight.shadow.camera.bottom = -1;

  dirLight.shadow.mapSize.width = 1024;
  dirLight.shadow.mapSize.height = 1024;
  threeScene.add(dirLight);
}
function update() {
  simulate();
  requestAnimationFrame(update);
}

update(); // Starts the Browser updates
