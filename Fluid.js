//+++++ CANVAS SETUP +++++ CANVAS SETUP +++++ CANVAS SETUP +++++ CANVAS SETUP +++++ CANVAS SETUP

// makes the Canvas the size of the Page
var canvas = document.getElementById("myCanvas");

// Sets a reffrence to say we aare inn 2d
var c = canvas.getContext("2d");

canvas.width = window.innerWidth - 20; //sets it to the edge of page(with 20px margin)
canvas.height = window.innerHeight - 100; //sets height to edge of page(with 100px margin)

// Flips the Browser cordnets to the simulation cordnates
var simMinWidth = 20.0; //sets the min to 20px to get off the browser wall
var cScale = Math.min(canvas.width, canvas.height) / simMinWidth;
var simWidth = canvas.width / cScale;
var simHeight = canvas.height / cScale;

function cX(pos) {
  // Scales the sim to browser
  return pos.x * cScale;
}
function cY(pos) {
  //Scales and flips the sim to the  browser
  return canvas.height - pos.y * cScale;
}
//+++++ CANVAS DONE +++++ CANVAS DONE +++++ CANVAS DONE +++++ CANVAS DONE +++++ CANVAS DONE

// ITEMS
var ball = {
  // makes ball OBJ and sets the size(radius) and the postion(pos)
  radius: 0.2,
  pos: { x: 0.2, y: 0.2 },
};
// drawing =================================================================
function draw() {
  c.clearRect(0, 0, canvas.width, canvas.height);

  c.fillStyle = "#FF0000";

  c.beginPath();
  c.arc(cX(ball.pos), cY(ball.pos), cScale * ball.radius, 0.0, 2.0 * Math.PI);
  c.closePath();
  c.fill();
}

// simulation =================================================================

function simulate() {}

// update browser =================================================================

function update() {
  simulate();
  draw();
  requestAnimationFrame(update);
}

update(); // Starts the Browser updates
