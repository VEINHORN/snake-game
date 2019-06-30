import { SnakeItem } from "./snake_item";

export class Snake {
  private items: SnakeItem[];

  constructor() {
    this.items = [new SnakeItem(0, 0)];
  }

  update() {
    this.items.forEach(element => {
      element.x += 5;
      element.y += 5;
    });
  }

  draw(ctx: CanvasRenderingContext2D) {
    // ctx.fillStyle = "#0ff";
    // ctx.fillRect(0, 0, 50, 50);

    this.items.forEach(element => {
      element.draw(ctx);
    });
  }
}
