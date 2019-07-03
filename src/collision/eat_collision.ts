import { CollisionDetector } from "./collision";
import { Snake } from "../snake";
import { Eat } from "../eat";
import { Direction } from "../direction";
import { SnakePart } from "../snake_part";

/**
 * Detects collision between snake and eat
 */
export class EatCollisionDetector implements CollisionDetector {
  private snake: Snake;
  private eat: Eat[];
  private delta: number;

  constructor(snake: Snake, eat: Eat[], delta: number) {
    this.snake = snake;
    this.eat = eat;
    this.delta = delta;
  }

  detect() {
    if (this.snake.direction == Direction.Right) {
      let snakeHead = this.snake.getHead();
      let isCollisionOccured = false;
      let eatItemToRemove: number;

      for (let i = 0; i < this.eat.length; i++) {
        if (
          snakeHead.x + this.delta == this.eat[i].x &&
          snakeHead.y == this.eat[i].y
        ) {
          console.log("Detected right collision with eat.");

          this.growSnake(new SnakePart(this.eat[i].x, this.eat[i].y));
          isCollisionOccured = true;
          eatItemToRemove = i;
          break;
        }
      }

      if (isCollisionOccured) {
        this.deleteEat(eatItemToRemove);
      }
    } else if (this.snake.direction == Direction.Left) {
      let snakeHead = this.snake.getHead();
      let isCollisionOccured = false;
      let eatItemToRemove: number;

      for (let i = 0; i < this.eat.length; i++) {
        if (
          snakeHead.x - this.delta == this.eat[i].x &&
          snakeHead.y == this.eat[i].y
        ) {
          console.log("Detected left collision with eat.");

          this.growSnake(new SnakePart(this.eat[i].x, this.eat[i].y));
          isCollisionOccured = true;
          eatItemToRemove = i;
          break;
        }

        if (isCollisionOccured) {
          this.deleteEat(eatItemToRemove);
        }
      }

      if (isCollisionOccured) {
        this.deleteEat(eatItemToRemove);
      }
    } else if (this.snake.direction == Direction.Up) {
      let snakeHead = this.snake.getHead();
      let isCollisionOccured = false;
      let eatItemToRemove: number;

      for (let i = 0; i < this.eat.length; i++) {
        if (
          snakeHead.x == this.eat[i].x &&
          snakeHead.y - this.delta == this.eat[i].y
        ) {
          console.log("Detected up collision with eat.");

          this.growSnake(new SnakePart(this.eat[i].x, this.eat[i].y));
          isCollisionOccured = true;
          eatItemToRemove = i;
          break;
        }

        if (isCollisionOccured) {
          this.deleteEat(eatItemToRemove);
        }
      }
    } else if (this.snake.direction == Direction.Down) {
      let snakeHead = this.snake.getHead();
      let isCollisionOccured = false;
      let eatItemToRemove: number;

      for (let i = 0; i < this.eat.length; i++) {
        if (
          snakeHead.x == this.eat[i].x &&
          snakeHead.y + this.delta == this.eat[i].y
        ) {
          console.log("Detected down collision with eat.");

          this.growSnake(new SnakePart(this.eat[i].x, this.eat[i].y));
          isCollisionOccured = true;
          eatItemToRemove = i;
          break;
        }
      }

      if (isCollisionOccured) {
        this.deleteEat(eatItemToRemove);
      }
    }
  }

  private growSnake(snakePart: SnakePart) {
    this.snake.parts.push(snakePart);
  }

  private deleteEat(pos: number) {
    this.eat.splice(pos, 1);
  }
}
