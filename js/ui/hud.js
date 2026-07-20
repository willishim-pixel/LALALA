// HUD System
class HUDSystem {
  constructor() {
    this.elements = {
      gameTime: document.getElementById('game-time'),
      weatherIcon: document.getElementById('weather-icon'),
      weatherTemp: document.getElementById('weather-temp'),
      playerMoney: document.getElementById('player-money'),
      energyBar: document.getElementById('energy-bar'),
      moodBar: document.getElementById('mood-bar'),
      hungerBar: document.getElementById('hunger-bar')
    };
    this.init();
  }
  
  init() {
    EventEmitter.on('timeChanged', (data) => this.updateTime());
    EventEmitter.on('weatherChanged', (data) => this.updateWeather(data));
    EventEmitter.on('moneyChanged', (data) => this.updateMoney(data));
    EventEmitter.on('statsChanged', (data) => this.updateStats(data));
  }
  
  update() {
    this.updateTime();
    this.updateWeather();
    this.updateMoney();
    this.updateStats();
  }
  
  updateTime() {
    const time = timeSystem.getTime();
    this.elements.gameTime.textContent = time.string;
  }
  
  updateWeather(data) {
    const weather = weatherSystem.getWeatherInfo();
    this.elements.weatherIcon.textContent = weather.icon;
    this.elements.weatherTemp.textContent = weather.temp + '°F';
  }
  
  updateMoney(data) {
    this.elements.playerMoney.textContent = '$' + player.stats.money.toLocaleString();
  }
  
  updateStats(data) {
    const stats = player.stats;
    this.updateBar(this.elements.energyBar, stats.energy);
    this.updateBar(this.elements.moodBar, stats.mood);
    this.updateBar(this.elements.hungerBar, 100 - stats.hunger);
  }
  
  updateBar(element, value) {
    const fill = element.querySelector('.fill');
    fill.style.width = Math.max(0, Math.min(100, value)) + '%';
  }
  
  addNotification(message, type = 'info', duration = 3000) {
    const notifElement = document.createElement('div');
    notifElement.className = `notification ${type}`;
    notifElement.textContent = message;
    
    const notifContainer = document.getElementById('notifications');
    notifContainer.appendChild(notifElement);
    
    setTimeout(() => {
      notifElement.classList.add('removing');
      setTimeout(() => notifElement.remove(), 300);
    }, duration);
  }
}

const hudSystem = new HUDSystem();