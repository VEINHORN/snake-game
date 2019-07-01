import { SnakePart } from "./snake_part";
import { Direction } from "./direction";

export class Snake {
  private _parts: SnakePart[];
  private cellSize: number;
  private _direction: Direction;

  constructor(cellSize: number) {
    this.cellSize = cellSize;
    this._parts = [
      new SnakePart(cellSize * 0, 0),
      new SnakePart(cellSize * 1, 0),
      new SnakePart(cellSize * 2, 0),
      new SnakePart(cellSize * 3, 0),
      new SnakePart(cellSize * 4, 0),
      new SnakePart(cellSize * 5, 0),
      new SnakePart(cellSize * 6, 0),
      new SnakePart(cellSize * 7, 0),
      new SnakePart(cellSize * 8, 0),
      new SnakePart(cellSize * 9, 0)
    ];

    // Right is direction by default
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
    switch (this._direction) {
      case Direction.Left:
        this._parts = this._parts
          .slice(1)
          .concat([
            new SnakePart(this.getHead().x - this.cellSize, this.getHead().y)
          ]);
        break;
      case Direction.Right:
        this._parts = this._parts
          .slice(1)
          .concat([
            new SnakePart(this.getHead().x + this.cellSize, this.getHead().y)
          ]);
        break;
      case Direction.Up:
        this._parts = this._parts
          .slice(1)
          .concat([
            new SnakePart(this.getHead().x, this.getHead().y - this.cellSize)
          ]);
        break;
      case Direction.Down:
        this._parts = this._parts
          .slice(1)
          .concat([
            new SnakePart(this.getHead().x, this.getHead().y + this.cellSize)
          ]);
        break;
    }
  }

  getHead() {
    return this._parts[this._parts.length - 1];
  }

  draw(ctx: CanvasRenderingContext2D) {
    this._parts.forEach(element => {
      element.draw(ctx);
    });
  }
}
