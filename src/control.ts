import { Snake } from "./snake/snake";
import { Direction } from "./direction";

export class Control {
  constructor(snake: Snake) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        // Enter key - open fire
        case 13:
          snake.fire();
          break;

        case 37:
          snake.changeDirection(Direction.Left);
          break;

        case 38:
          snake.changeDirection(Direction.Up);
          break;

        case 39:
          snake.changeDirection(Direction.Right);
          break;

        case 40:
          snake.changeDirection(Direction.Down);
          break;
      }
    });
  }
}
