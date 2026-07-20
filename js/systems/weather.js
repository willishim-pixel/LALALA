// Weather System
class WeatherSystem {
  constructor() {
    this.current = 'sunny';
    this.temperature = 72;
    this.nextWeatherChange = Math.random() * 10000 + 5000; // 5-15 mins
    this.weatherCycle = 0;
  }
  
  update(deltaTime) {
    this.nextWeatherChange -= deltaTime;
    
    if (this.nextWeatherChange <= 0) {
      this.changeWeather();
      this.nextWeatherChange = Math.random() * 10000 + 5000;
    }
    
    // Temperature fluctuation
    const baseTemp = 72;
    const seasonOffset = Math.sin(this.weatherCycle / 1000) * 15;
    this.temperature = baseTemp + seasonOffset;
  }
  
  changeWeather() {
    const weathers = ['sunny', 'cloudy', 'rainy'];
    const current = weathers.indexOf(this.current);
    
    // Slightly favor staying same weather
    const rand = Math.random();
    if (rand < 0.4) {
      this.current = this.current; // Stay same
    } else if (rand < 0.7) {
      this.current = weathers[(current + 1) % weathers.length];
    } else {
      this.current = weathers[(current - 1 + weathers.length) % weathers.length];
    }
    
    EventEmitter.emit('weatherChanged', { weather: this.current, temp: Math.round(this.temperature) });
  }
  
  getWeatherInfo() {
    const weatherIcons = {
      sunny: '☀️',
      cloudy: '☁️',
      rainy: '🌧️',
      snowy: '❄️'
    };
    
    return {
      type: this.current,
      icon: weatherIcons[this.current] || '☀️',
      temp: Math.round(this.temperature)
    };
  }
}

const weatherSystem = new WeatherSystem();