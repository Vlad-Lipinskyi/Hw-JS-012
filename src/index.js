class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;

    this.timerEl = document.querySelector(this.selector);
    this.daysEl = document.querySelector('[data-value="days"]');
    this.hoursEl = document.querySelector('[data-value="hours"]');
    this.minsEl = document.querySelector('[data-value="mins"]');
    this.secsEl = document.querySelector('[data-value="secs"]');

    this.startTimer();
  }

  startTimer() {
    this.updateTimer();
    this.interval = setInterval(() => {
      this.updateTimer();
    }, 1000);
  }

  updateTimer() {
    const currentTime = new Date();
    const time = this.targetDate - currentTime;

    if (time <= 0) {
      clearInterval(this.interval);
      this.renderTimer({ days: 0, hours: 0, mins: 0, secs: 0 });
    }

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    this.renderTimer({ days, hours, mins, secs });
  }

  renderTimer({ days, hours, mins, secs }) {
    this.daysEl.textContent = days;
    this.hoursEl.textContent = hours.toString().padStart(2, "0");
    this.minsEl.textContent = mins.toString().padStart(2, "0");
    this.secsEl.textContent = secs.toString().padStart(2, "0");
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2025"), 
});