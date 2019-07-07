import { Drawable } from "../drawable";

export class Cell implements Drawable {
  constructor(private xCell: number, private yCell: number) {}

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "black";
    ctx.fillRect(this.xCell * 15, this.yCell * 15, 15, 15);
  }

  x(): number {
    return this.xCell * 15;
  }

  y(): number {
    return this.yCell * 15;
  }
}
