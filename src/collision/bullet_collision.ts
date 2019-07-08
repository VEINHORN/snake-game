import { CollisionDetector } from "./collision";
import { Bullet } from "../weapon/bullet";
import { Wall } from "../object/wall";
import { Direction } from "../direction";
import { Cell } from "../object/cell";

/**
 * Detects all collisions related to the bullets
 */
export class BulletCollisionDetector implements CollisionDetector {
  private _bullets: Bullet[];
  private _walls: Wall[];
  private delta: number;

  constructor(_bullets: Bullet[], _walls: Wall[], delta: number) {
    this._bullets = _bullets;
    this._walls = _walls;
    this.delta = delta;
  }

  detect(): boolean {
    // For every bullet
    for (let i = 0; i < this._bullets.length; i++) {
      let bullet = this._bullets[i];

      // For every wall
      for (let j = 0; j < this._walls.length; j++) {
        let wall = this._walls[j];
        // For every cell in the wall
        for (let k = 0; k < wall.cells.length; k++) {
          let cell = wall.cells[k];

          if (this.isCollision(bullet, cell)) {
            wall.cells.splice(k, 1);
            this._bullets.splice(i, 1);
            return true;
          }
        }
      }
    }

    return false;
  }

  private isCollision(bullet: Bullet, cell: Cell): boolean {
    switch (bullet.direction) {
      case Direction.Right: {
        return (
          (bullet.x + this.delta == cell.x() && bullet.y == cell.y()) ||
          (bullet.x == cell.x() && bullet.y == cell.y())
        );
      }
      case Direction.Left: {
        return (
          (bullet.x - this.delta == cell.x() && bullet.y == cell.y()) ||
          (bullet.x == cell.x() && bullet.y == cell.y())
        );
      }
      case Direction.Up: {
        return (
          (bullet.x == cell.x() && bullet.y - this.delta == cell.y()) ||
          (bullet.x == cell.x() && bullet.y == cell.y())
        );
      }
      case Direction.Down: {
        return (
          (bullet.x == cell.x() && bullet.y + this.delta == cell.y()) ||
          (bullet.x == cell.x() && bullet.y == cell.y())
        );
      }
      default: {
        return false;
      }
    }
  }
}
