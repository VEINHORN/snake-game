export class SnakePart {
  constructor(private _x: number, private _y: number) {
    this._x = _x;
    this._y = _y;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "green";
    ctx.fillRect(this._x, this._y, 15, 15);
  }

  get x() {
    return this._x;
  }

  set x(x: number) {
    this._x = x;
  }

  get y() {
    return this._y;
  }

  set y(y: number) {
    this._y = y;
  }
}
