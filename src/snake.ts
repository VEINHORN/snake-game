import { SnakePart } from "./snake_part";
import { Direction } from "./direction";

export class Snake {
  private _parts: SnakePart[];
  private cellSize: number;
  private _direction: Direction;

  constructor(cellSize: number) {
    this._parts = [new SnakePart(0, 0)]; // init Snake with 1 item
    this.cellSize = cellSize;

    // set up direction
    this._direction = Direction.Right;
  }

  get direction() {
    return this._direction;
  }

  get parts() {
    return this._parts;
  }

  changeDirection(direction: Direction) {
    this._direction = direction;
  }

  update() {
    // Here we change coords for each of snake parts
    this._parts.forEach(element => {
      switch (this._direction) {
        case Direction.Left:
          element.x -= this.cellSize;
          break;
        case Direction.Right:
          element.x += this.cellSize;
          break;
        case Direction.Up:
          element.y -= this.cellSize;
          break;
        case Direction.Down:
          element.y += this.cellSize;
          break;
      }
    });
  }

  draw(ctx: CanvasRenderingContext2D) {
    this._parts.forEach(element => {
      element.draw(ctx);
    });
  }
}
