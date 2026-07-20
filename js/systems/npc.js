// NPC System
class NPC {
  constructor(config) {
    this.id = config.id;
    this.name = config.name;
    this.age = config.age;
    this.avatar = config.avatar;
    this.color = config.color;
    this.position = { ...config.home };
    this.homePosition = { ...config.home };
    this.job = config.job;
    this.personality = config.personality;
    this.schedule = config.schedule;
    this.likes = config.likes || [];
    this.dislikes = config.dislikes || [];
    this.favoriteItems = config.favoriteItems || [];
    
    // Relationship with player
    this.relationship = 0;
    this.isMoving = false;
    this.targetPosition = null;
    this.currentAction = 'idle';
    this.dialogueState = 'greeting';
  }
  
  update(deltaTime, timeSystem) {
    const currentTime = timeSystem.getTime();
    const scheduleEntry = this.schedule[currentTime.hours];
    
    if (scheduleEntry) {
      this.currentAction = scheduleEntry.action;
      this.moveToLocation(scheduleEntry.location);
    }
    
    // Update position if moving
    if (this.isMoving && this.targetPosition) {
      const dx = this.targetPosition.x - this.position.x;
      const dy = this.targetPosition.y - this.position.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 2) {
        this.position = { ...this.targetPosition };
        this.isMoving = false;
      } else {
        const speed = 2;
        this.position.x += (dx / distance) * speed;
        this.position.y += (dy / distance) * speed;
      }
    }
  }
  
  moveToLocation(location) {
    if (location === 'home') {
      this.targetPosition = { ...this.homePosition };
      this.isMoving = true;
    }
    // Other locations would be defined in a location system
  }
  
  talk() {
    const greetings = [
      `Hi there! I'm ${this.name}.`,
      `Hey! What's up?`,
      `Nice to see you!`,
      `Welcome!`
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  }
  
  giveItem(itemId) {
    if (this.favoriteItems.includes(itemId)) {
      this.relationship += 10;
      return `Thank you! I love ${itemId}!`;
    } else {
      this.relationship += 2;
      return 'Thanks!';
    }
  }
  
  getRelationshipLevel() {
    if (this.relationship < -50) return 'hostile';
    if (this.relationship < -20) return 'unfriendly';
    if (this.relationship < 0) return 'neutral';
    if (this.relationship < 30) return 'acquaintance';
    if (this.relationship < 60) return 'friend';
    return 'best_friend';
  }
}

const npcSystem = { npcs: [] };