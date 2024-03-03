import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["duration", "container"];

  containerTargetConnected(target) {
    this.timer = new TickingTimer(
      this.parseDuration(this.durationTarget.innerHTML),
      this.onTick.bind(this)
    );

    if (target.dataset.habitEntryComplete === "true") return;
    this.startTimer();
  }

  containerTargetDisconnected(target) {
    this.timer.stop();
    this.timer = undefined;
  }

  startTimer() {
    this.timer.start();
  }

  toggleTimer() {
    this.timer.toggle();
  }

  onTick() {
    this.updateDOM();
  }

  updateDOM() {
    this.durationTarget.innerHTML = this.timer.toFormatted();
  }

  /**
   *
   * @param {String} formattedTime - Example "2h 34m 56s"
   * @returns {Number}
   */
  parseDuration(formattedTime) {
    const timeParts = formattedTime.split(" ").reverse();
    return timeParts.reduce((sum, timePart, index) => {
      const timePiece = parseInt(timePart.replace(/[a-zA-Z]/g, ""));
      switch (index) {
        case 0:
          return sum + timePiece;
        case 1:
          return sum + timePiece * 60;
        case 2:
          return sum + timePiece * 3600;
      }
    }, 0);
  }
}

/**
 * @param {Number} duration - The duration in whole seconds
 * @param {Function} onTick - Function to call when a tick occurs
 */
class TickingTimer {
  constructor(duration, onTick) {
    this.validate(duration, onTick);
    this.duration = duration;
    this.intervalId = undefined;
    this.onTick = onTick;
    this.ticking = false;
  }

  validate(...args) {
    const [duration, onTick] = args;
    if (typeof duration !== "number")
      throw Error("duration should be a number");
    if (typeof onTick !== "function")
      throw Error("onTick should be a function");
  }

  toggle() {
    if (this.ticking) {
      this.stop();
    } else {
      this.start();
    }
  }

  start() {
    this.intervalId = setInterval(this.tick.bind(this), 1000);
    this.ticking = true;
  }

  stop() {
    clearInterval(this.intervalId);
    this.ticking = false;
  }

  tick() {
    this.duration += 1;
    console.log("duration", this.duration);
    this.onTick();
  }

  toFormatted() {
    const hours = parseInt(this.duration / 3600);
    const minutes = parseInt((this.duration % 3600) / 60);
    const seconds = this.duration % 60;

    let result = "";
    if (hours > 0) result += `${hours}hr `;
    if (minutes > 0) result += `${minutes}min `;
    if (seconds >= 0) result += `${seconds}sec`;

    return result;
  }
}
