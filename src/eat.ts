import { Position } from "./position";
import { GameObject } from "./game_object";

export class Eat implements GameObject {
  private _x: number;
  private _y: number;
  private cellSize: number;

  private color: string;

  constructor(x: number, y: number, cellSize: number) {
    this._x = x;
    this._y = y;
    this.cellSize = cellSize;

    this.color = "red";
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(
      <CanvasImageSource>document.getElementById("apple"),
      this._x,
      this._y
    );
  }
}
