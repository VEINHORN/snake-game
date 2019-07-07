import { Drawable } from "../drawable";
import { Cell } from "./cell";

export class Wall implements Drawable {
  private _cells: Cell[];

  constructor() {
    this._cells = [];
  }

  get cells() {
    return this._cells;
  }

  draw(ctx: CanvasRenderingContext2D) {
    this._cells.forEach(cell => cell.draw(ctx));
  }

  addCell(cell: Cell) {
    this._cells.push(cell);
  }

  static xWall(fromX: number, toX: number, y: number) {
    let wall = new Wall();

    for (let i = fromX; i < toX; i++) {
      wall.addCell(new Cell(i, y));
    }

    return wall;
  }

  static yWall(fromY: number, toY: number, x: number) {
    let wall = new Wall();

    for (let i = fromY; i < toY; i++) {
      wall.addCell(new Cell(x, i));
    }

    return wall;
  }
}
