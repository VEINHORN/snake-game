import { Snake } from "./snake/snake";
import { Eat } from "./eat";
import { Direction } from "./direction";
import { SnakePart } from "./snake/snake_part";
import { EatCollisionDetector } from "./collision/eat_collision";
import { Bullet } from "./weapon/bullet";

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

    // fill game field with eat objects
    this._eat = [];
    for (let i = 0; i < 5; i++) {
      this._eat.push(
        new Eat(
          cellSize * Math.floor(Math.random() * (gameHeight / cellSize) + 0),
          cellSize * Math.floor(Math.random() * (gameHeight / cellSize) + 0),
          cellSize
        )
      );
    }
  }

  get snake() {
    return this._snake;
  }

  private createRandomEat(): Eat {
    return new Eat(
      this.cellSize *
        Math.floor(Math.random() * (this.gameHeight / this.cellSize) + 0),
      this.cellSize *
        Math.floor(Math.random() * (this.gameHeight / this.cellSize) + 0),
      this.cellSize
    );
  }

  update() {
    // Detect collisions
    if (
      new EatCollisionDetector(this._snake, this._eat, this.cellSize).detect()
    ) {
      this._eat.push(this.createRandomEat());
    }

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
      // console.log(element);
      element.draw(ctx);
    });

    // Draw snake
    this._snake.draw(ctx);

    // ctx.drawImage(<CanvasImageSource>document.getElementById("apple"), 0, 0);
  }

  // detect collision between snake and eat
  detectCollision() {}
}
