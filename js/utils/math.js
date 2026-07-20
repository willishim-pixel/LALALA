// Utility: Event Emitter
const EventEmitter = {
  events: {},
  
  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  },
  
  off(event, callback) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(cb => cb !== callback);
    }
  },
  
  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(callback => callback(data));
    }
  }
};

// Utility: Math helpers
const MathUtils = {
  distance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
  },
  
  clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  },
  
  lerp(a, b, t) {
    return a + (b - a) * t;
  },
  
  random(min, max) {
    return Math.random() * (max - min) + min;
  }
};

// Utility: Storage helpers
const StorageUtils = {
  save(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
      return true;
    } catch (e) {
      console.error('Storage save failed:', e);
      return false;
    }
  },
  
  load(key) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      console.error('Storage load failed:', e);
      return null;
    }
  },
  
  remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (e) {
      console.error('Storage remove failed:', e);
      return false;
    }
  }
};