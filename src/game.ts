import { Snake } from "./snake";
import { Eat } from "./eat";
import { Direction } from "./direction";
import { SnakePart } from "./snake_part";

export class Game {
  private _snake: Snake;
  private _eat: Eat[];

  constructor(
    private gameHeight: number,
    private gameWidth: number,
    private cellSize: number
  ) {
    this.gameHeight = gameHeight;
    this.gameWidth = gameWidth;
    this.cellSize = cellSize;

    this._snake = new Snake(cellSize);
    this._eat = [new Eat(cellSize * 5, cellSize * 0, cellSize)];
  }

  get snake() {
    return this._snake;
  }

  generateEat() {
    // ...
  }

  update() {
    // Here we need to detect collisions
    if (this._snake.direction == Direction.Right) {
      let head = this.snake.parts[0];
      console.log(head);

      this._eat.forEach(eat => {
        if (head.x + this.cellSize == eat.x && head.y == eat.y) {
          this.snake.parts.push(new SnakePart(eat.x, eat.y));
          console.log("right direction collision detected");
        }
      });

      // console.log("Snake head: {x: " + head.x + ", y: " + head.y);
    }

    this._snake.update();
  }

  draw(ctx: CanvasRenderingContext2D) {
    for (let i = 0; i < this.gameHeight / this.cellSize; i++) {
      ctx.beginPath();
      ctx.moveTo(this.cellSize * i, 0);
      ctx.lineTo(this.cellSize * i, this.gameHeight);
      ctx.stroke();
    }
    for (let i = 0; i < this.gameWidth / this.cellSize; i++) {
      ctx.beginPath();
      ctx.moveTo(0, this.cellSize * i);
      ctx.lineTo(this.gameWidth, this.cellSize * i);
      ctx.stroke();
    }

    this._eat.forEach(element => {
      element.draw(ctx);
    });

    this._snake.draw(ctx);
  }

  // detect collision between snake and eat
  detectCollision() {}
}
