import { Game } from "./game";
import { Snake } from "./snake/snake";
import { Control } from "./control";

let canvas = <HTMLCanvasElement>document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 600;
const GAME_HEIGHT = 600;
const CELL_SIZE = 15;

let start = null;

var game = new Game(GAME_HEIGHT, GAME_WIDTH, CELL_SIZE);
var control = new Control(game.snake);

// Game loop which is used to update game
function gameLoop(timestamp) {
  if (!start) start = timestamp;

  var progress = timestamp - start;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  game.draw(ctx);
  game.update();

  /*if (progress < 150000) {
    window.requestAnimationFrame(gameLoop);
  }*/
  var fps = 5;
  setTimeout(() => {
    window.requestAnimationFrame(gameLoop);
  }, 1000 / fps);
}

window.requestAnimationFrame(gameLoop);
