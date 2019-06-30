import { Game } from "./game";
import { Snake } from "./snake";
import { Control } from "./control";

let canvas = <HTMLCanvasElement>document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 600;
const GAME_HEIGHT = 600;
const CELL_SIZE = 15;

let start = null;

var snake = new Snake(CELL_SIZE);
var control = new Control(snake);

// Game loop which is used to update game
function gameLoop(timestamp) {
  if (!start) start = timestamp;

  var progress = timestamp - start;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  // draw cells

  for (let i = 0; i < GAME_HEIGHT / CELL_SIZE; i++) {
    ctx.beginPath();
    ctx.moveTo(CELL_SIZE * i, 0);
    ctx.lineTo(CELL_SIZE * i, GAME_HEIGHT);
    ctx.stroke();
  }
  for (let i = 0; i < GAME_WIDTH / CELL_SIZE; i++) {
    ctx.beginPath();
    ctx.moveTo(0, CELL_SIZE * i);
    ctx.lineTo(GAME_WIDTH, CELL_SIZE * i);
    ctx.stroke();
  }

  // update and move snake
  snake.update();
  snake.draw(ctx);

  /*if (progress < 150000) {
    window.requestAnimationFrame(gameLoop);
  }*/
  var fps = 3;
  setTimeout(() => {
    window.requestAnimationFrame(gameLoop);
  }, 1000 / fps);
}

window.requestAnimationFrame(gameLoop);
