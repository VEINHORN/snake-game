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
    this._eat = [
      new Eat(cellSize * 20, cellSize * 1, cellSize),
      new Eat(cellSize * 30, cellSize * 1, cellSize)
    ];
  }

  get snake() {
    return this._snake;
  }

  generateEat() {
    // ...
  }

  update() {
    // Detect collisions

    if (this._snake.direction == Direction.Right) {
      let head = this.snake.getHead();

      let flag = false;

      for (let i = 0; i < this._eat.length; i++) {
        if (
          head.x + this.cellSize == this._eat[i].x &&
          head.y == this._eat[i].y
        ) {
          this._snake.parts.push(new SnakePart(this._eat[i].x, this._eat[i].y));
          console.log("right direction collision detected");

          flag = true;
          break;
        }
      }

      if (flag) {
        this._eat.shift();
        return;
      }
      // console.log("Snake head: {x: " + head.x + ", y: " + head.y);
    }

    this._snake.update();
  }

  draw(ctx: CanvasRenderingContext2D) {
    // Draw game field
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
    // Draw eat
    this._eat.forEach(element => {
      console.log(element);
      element.draw(ctx);
    });
    // Draw snake
    this._snake.draw(ctx);
  }

  // detect collision between snake and eat
  detectCollision() {}
}
