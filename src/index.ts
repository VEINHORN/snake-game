import { Snake } from "./snake";
import { Control } from "./control";

let canvas = <HTMLCanvasElement>document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 600;
const GAME_HEIGHT = 600;

let start = null;

var snake = new Snake();

function gameLoop(timestamp) {
  if (!start) start = timestamp;

  var progress = timestamp - start;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  // draw cells

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
