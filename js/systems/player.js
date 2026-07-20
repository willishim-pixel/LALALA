// Player System
class Player {
  constructor() {
    this.position = { x: 1500, y: 1500 };
    this.velocity = { x: 0, y: 0 };
    this.speed = 3;
    this.direction = 0; // 0-3 for up, right, down, left
    this.isMoving = false;
    this.avatar = '👨';
    this.name = 'Player';
    
    // Stats
    this.stats = {
      energy: 100,
      mood: 75,
      hunger: 50,
      health: 100,
      money: 500
    };
    
    // Career
    this.career = null;
    this.careerLevel = 0;
    this.careerExp = 0;
    
    // Housing
    this.home = null;
    this.homeFurniture = {};
    
    // Vehicles
    this.vehicles = [];
    this.currentVehicle = null;
    
    // Relationships
    this.relationships = {};
    
    // Inventory
    this.inventory = [];
    this.maxInventorySlots = 20;
    
    // Skills
    this.skills = {
      fishing: 0,
      cooking: 0,
      photography: 0,
      driving: 0,
      socializing: 0
    };
  }
  
  update(deltaTime) {
    // Update position
    this.position.x += this.velocity.x * this.speed;
    this.position.y += this.velocity.y * this.speed;
    
    // Decay stats
    this.stats.energy -= 0.01 * deltaTime;
    this.stats.hunger += 0.02 * deltaTime;
    
    // Clamp stats
    Object.keys(this.stats).forEach(stat => {
      if (stat !== 'money') {
        this.stats[stat] = Math.max(0, Math.min(100, this.stats[stat]));
      }
    });
  }
  
  move(dx, dy) {
    this.velocity.x = dx;
    this.velocity.y = dy;
    this.isMoving = dx !== 0 || dy !== 0;
    
    if (dx !== 0 || dy !== 0) {
      this.direction = Math.atan2(dy, dx);
    }
  }
  
  addMoney(amount) {
    this.stats.money += amount;
    EventEmitter.emit('moneyChanged', { money: this.stats.money, change: amount });
  }
  
  removeMoney(amount) {
    if (this.stats.money >= amount) {
      this.stats.money -= amount;
      EventEmitter.emit('moneyChanged', { money: this.stats.money, change: -amount });
      return true;
    }
    return false;
  }
  
  addItem(itemId, quantity = 1) {
    const item = ITEMS_CONFIG.items[itemId];
    if (!item) return false;
    
    for (let i = 0; i < quantity; i++) {
      if (this.inventory.length >= this.maxInventorySlots) {
        return false;
      }
      this.inventory.push({ id: itemId, ...item, timestamp: Date.now() });
    }
    
    EventEmitter.emit('inventoryChanged', { inventory: this.inventory });
    return true;
  }
  
  removeItem(itemId, quantity = 1) {
    let removed = 0;
    for (let i = this.inventory.length - 1; i >= 0; i--) {
      if (this.inventory[i].id === itemId && removed < quantity) {
        this.inventory.splice(i, 1);
        removed++;
      }
    }
    
    if (removed > 0) {
      EventEmitter.emit('inventoryChanged', { inventory: this.inventory });
    }
    return removed === quantity;
  }
  
  consumeItem(itemId) {
    const item = ITEMS_CONFIG.items[itemId];
    if (!item || item.type !== 'consumable') return false;
    
    if (item.effects) {
      Object.keys(item.effects).forEach(stat => {
        if (this.stats[stat] !== undefined) {
          this.stats[stat] = Math.max(0, Math.min(100, this.stats[stat] + item.effects[stat]));
        }
      });
    }
    
    return this.removeItem(itemId, 1);
  }
  
  setCareer(careerId) {
    this.career = careerId;
    this.careerLevel = 1;
    this.careerExp = 0;
    EventEmitter.emit('careerChanged', { career: careerId, level: 1 });
  }
  
  gainCareerExp(amount) {
    this.careerExp += amount;
    const careerConfig = CAREER_CONFIG.careers[this.career];
    const expPerLevel = 1000;
    
    if (this.careerExp >= expPerLevel) {
      this.careerLevel++;
      this.careerExp = 0;
      EventEmitter.emit('careerLevelUp', { career: this.career, level: this.careerLevel });
    }
  }
}

const player = new Player();