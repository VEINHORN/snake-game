import { Weapon } from "./weapon";
import { Position } from "../position";
import { GameObject } from "../game_object";
import { Direction } from "../direction";

export class Bullet implements Weapon, Position, GameObject {
  readonly speed = 2;

  constructor(
    private _x: number,
    private _y: number,
    private cellSize: number,
    private _direction: Direction
  ) {}

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  get direction() {
    return this._direction;
  }

  update() {
    if (this._direction == Direction.Right) {
      this._x += this.cellSize * this.speed;
    } else if (this._direction == Direction.Left) {
      this._x -= this.cellSize * this.speed;
    } else if (this._direction == Direction.Down) {
      this._y += this.cellSize * this.speed;
    } else if (this._direction == Direction.Up) {
      this._y -= this.cellSize * this.speed;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(
      <CanvasImageSource>document.getElementById("bullet"),
      this._x,
      this._y
    );
  }
}
