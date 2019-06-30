import { SnakeItem } from "./snake_item";
import { Direction } from "./direction";

export class Snake {
  private items: SnakeItem[];
  private cellSize: number;
  private direction: Direction;

  constructor(cellSize: number) {
    this.items = [new SnakeItem(0, 0)]; // init Snake with 1 item
    this.cellSize = cellSize;

    // set up direction
    this.direction = Direction.Right;
  }

  changeDirection(direction: Direction) {
    this.direction = direction;
  }

  update() {
    this.items.forEach(element => {
      switch (this.direction) {
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
    this.items.forEach(element => {
      element.draw(ctx);
    });
  }
}
