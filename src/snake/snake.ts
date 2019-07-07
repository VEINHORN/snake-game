import { SnakePart } from "./snake_part";
import { Direction } from "../direction";
import { Bullet } from "../weapon/bullet";

export class Snake {
  private _parts: SnakePart[];
  private cellSize: number;
  private _direction: Direction;

  // Fired bullets
  private _bullets: Bullet[];

  constructor(cellSize: number) {
    this.cellSize = cellSize;
    this._parts = [
      new SnakePart(cellSize * 0, cellSize * 15),
      new SnakePart(cellSize * 1, cellSize * 15),
      new SnakePart(cellSize * 2, cellSize * 15)
    ];

    // Right is direction by default
    this._direction = Direction.Right;

    this._bullets = [];
  }

  fire() {
    if (this._direction == Direction.Right) {
      this._bullets.push(
        new Bullet(
          this.getHead().x + this.cellSize * 2,
          this.getHead().y,
          this.cellSize,
          this.direction
        )
      );
    } else if (this._direction == Direction.Left) {
      this._bullets.push(
        new Bullet(
          this.getHead().x - this.cellSize * 2,
          this.getHead().y,
          this.cellSize,
          this.direction
        )
      );
    } else if (this._direction == Direction.Up) {
      this._bullets.push(
        new Bullet(
          this.getHead().x,
          this.getHead().y - this.cellSize * 2,
          this.cellSize,
          this.direction
        )
      );
    } else if (this._direction == Direction.Down) {
      this._bullets.push(
        new Bullet(
          this.getHead().x,
          this.getHead().y + this.cellSize * 2,
          this.cellSize,
          this.direction
        )
      );
    }
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

  toString(direction: Direction): string {
    if (direction == Direction.Right) return "right";
    else if (direction == Direction.Left) return "left";
    else if (direction == Direction.Up) return "up";
    else if (direction == Direction.Down) return "down";
  }

  update() {
    console.log("Snake direction is " + this.toString(this._direction));

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

    this._bullets.forEach(bullet => bullet.update());
  }

  getHead() {
    return this._parts[this._parts.length - 1];
  }

  draw(ctx: CanvasRenderingContext2D) {
    this._parts.forEach(element => {
      element.draw(ctx);
    });

    this._bullets.forEach(bullet => bullet.draw(ctx));
  }
}
