// Time System
class TimeSystem {
  constructor() {
    this.gameTime = 6 * 60; // 6:00 AM in minutes
    this.dayOfWeek = 0; // 0 = Monday
    this.season = 'spring';
    this.speed = 1; // minutes per frame
    this.isPaused = false;
  }
  
  update(deltaTime) {
    if (this.isPaused) return;
    
    this.gameTime += this.speed * deltaTime / 16; // Adjust for 60fps
    
    // Day cycle (1440 minutes = 24 hours)
    if (this.gameTime >= 1440) {
      this.gameTime = 0;
      this.dayOfWeek = (this.dayOfWeek + 1) % 7;
      EventEmitter.emit('dayChanged', { day: this.dayOfWeek });
    }
  }
  
  getTime() {
    const hours = Math.floor(this.gameTime / 60);
    const minutes = Math.floor(this.gameTime % 60);
    return {
      hours: hours,
      minutes: minutes,
      string: `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
    };
  }
  
  getDayName() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return days[this.dayOfWeek];
  }
  
  getSeason() {
    const month = Math.floor((this.dayOfWeek * 7 + 1) / 30) % 12;
    if (month < 3) return 'winter';
    if (month < 6) return 'spring';
    if (month < 9) return 'summer';
    return 'fall';
  }
  
  pause() {
    this.isPaused = true;
    EventEmitter.emit('timePaused');
  }
  
  resume() {
    this.isPaused = false;
    EventEmitter.emit('timeResumed');
  }
  
  setSpeed(speed) {
    this.speed = speed;
  }
}

const timeSystem = new TimeSystem();