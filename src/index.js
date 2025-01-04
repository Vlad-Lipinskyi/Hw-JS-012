class CountdownTimer {
    constructor({ selector, targetDate }) {
      this.selector = selector;
      this.targetDate = new Date(targetDate);
      this.timerElement = document.querySelector(selector);
      this.fields = this.timerElement.querySelectorAll(".field .value");
      this.updateTimer();
      setInterval(this.updateTimer.bind(this), 1000);
    }
  
    updateTimer() {
      const currentTime = new Date();
      const time = this.targetDate - currentTime;
  
      if (time <= 0) {
        this.resetTimer();
        return;
      }
  
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);
  
      this.fields[0].textContent = String(days).padStart(2, "0");
      this.fields[1].textContent = String(hours).padStart(2, "0");
      this.fields[2].textContent = String(mins).padStart(2, "0");
      this.fields[3].textContent = String(secs).padStart(2, "0");
    }
  
    resetTimer() {
      this.fields[0].textContent = "00";
      this.fields[1].textContent = "00";
      this.fields[2].textContent = "00";
      this.fields[3].textContent = "00";
    }
  }
  
  // Я поставив 2025, тому що якщо ставлю щось нижче, то показують нулі
  new CountdownTimer({
    selector: "#timer-1",
    targetDate: "Jul 17, 2025",  
  });
  