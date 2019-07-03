import { Snake } from "./snake";
import { Eat } from "./eat";
import { Direction } from "./direction";
import { SnakePart } from "./snake_part";
import { EatCollisionDetector } from "./collision/eat_collision";

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
      new Eat(cellSize * 20, cellSize * 5, cellSize),
      new Eat(cellSize * 30, cellSize * 5, cellSize)
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
    new EatCollisionDetector(this._snake, this._eat, this.cellSize).detect();

    // Update snake state
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
      ctx.strokeStyle = "grey";
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
