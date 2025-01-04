class CountdownTimer {
  constructor(options) {
    this.selector = options.selector;
    this.targetDate = options.targetDate;
    this.timerElement = document.querySelector(this.selector);
    this.fields = {
      days: this.timerElement.querySelector('[data-value="days"]'),
      hours: this.timerElement.querySelector('[data-value="hours"]'),
      mins: this.timerElement.querySelector('[data-value="mins"]'),
      secs: this.timerElement.querySelector('[data-value="secs"]')
    };
    this.start();
  }

  start() {
    this.interval = setInterval(() => {
      const currentTime = new Date();
      const time = this.targetDate - currentTime;

      if (time <= 0) {
        clearInterval(this.interval);
        this.updateTimer(0, 0, 0, 0); 
      } else {
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);

        this.updateTimer(days, hours, mins, secs);
      }
    }, 1000);
  }

  updateTimer(days, hours, mins, secs) {
    this.fields.days.textContent = days;
    this.fields.hours.textContent = String(hours).padStart(2, "0");
    this.fields.mins.textContent = String(mins).padStart(2, "0");
    this.fields.secs.textContent = String(secs).padStart(2, "0");
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2025 00:00:00")
});
