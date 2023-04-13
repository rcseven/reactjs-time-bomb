import { BehaviorSubject, interval } from "rxjs";

export class TimeConrtoller {
  constructor(initialTime) {
    this.initial_time = initialTime;
    this.timer = new BehaviorSubject(initialTime);
    this.set_mode = new BehaviorSubject("seconds");
  }

  start() {
    console.log("starting");
    if (this.timer_subs) {
      return;
    }

    this.stop();
    this.timer_subs = interval(1000).subscribe({
      next: (v) => {
        const current_time = this.timer.value;
        const next_time = current_time - 1;
        if (next_time < 0) {
          this.stop();
          return;
        }
        this.timer.next(next_time);
      },
    });
  }
  stop() {
    this.timer_subs?.unsubscribe();
    this.timer_subs = null;
  }

  reset() {
    this.stop();
    this.timer.next(this.initial_time);
  }

  setMinutes() {
    this.set_mode.next("minutes");
  }

  setSeconds() {
    this.set_mode.next("seconds");
  }

  increment() {
    this.stop();
    if (this.set_mode.value === "seconds") {
      this.timer.next(this.timer.value + 1);
    } else if (this.set_mode.value === "minutes") {
      this.timer.next(this.timer.value + 60);
    }
  }

  decrement() {
    this.stop();
    if (this.set_mode.value === "seconds") {
      this.timer.next(this.timer.value - 1);
    } else if (this.set_mode.value === "minutes") {
      this.timer.next(this.timer.value - 60);
    }
  }
}
