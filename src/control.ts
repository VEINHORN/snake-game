import { Snake } from "./snake";

export class Control {
  constructor(snake: Snake) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
          break;
      }
    });
  }
}
