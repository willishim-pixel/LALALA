// Activity System
class ActivitySystem {
  constructor() {
    this.activities = {};
    this.activeActivity = null;
    this.activityProgress = 0;
    this.initializeActivities();
  }
  
  initializeActivities() {
    this.activities = {
      fishing: {
        name: 'Fishing',
        icon: '🎣',
        duration: 3000,
        reward: 50,
        location: 'crystalLake',
        requirements: ['fishing_rod'],
        description: 'Cast your line and catch fish',
        skill: 'fishing',
        difficultyMultiplier: 1
      },
      camping: {
        name: 'Camping',
        icon: '⛺',
        duration: 5000,
        reward: 30,
        location: 'evergreenForest',
        requirements: ['tent'],
        description: 'Set up camp and relax',
        skill: 'survival',
        difficultyMultiplier: 0.8
      },
      photography: {
        name: 'Photography',
        icon: '📷',
        duration: 2000,
        reward: 100,
        location: null,
        requirements: ['camera'],
        description: 'Take photos of wildlife and landscapes',
        skill: 'photography',
        difficultyMultiplier: 1.2
      },
      hiking: {
        name: 'Hiking',
        icon: '⛰️',
        duration: 4000,
        reward: 40,
        location: 'pineRidgeMountains',
        requirements: [],
        description: 'Explore mountain trails',
        skill: 'endurance',
        difficultyMultiplier: 1.1
      },
      surfing: {
        name: 'Surfing',
        icon: '🏄',
        duration: 3000,
        reward: 60,
        location: 'sunnyShoresCoast',
        requirements: [],
        description: 'Ride the waves',
        skill: 'balance',
        difficultyMultiplier: 1.3
      },
      cooking: {
        name: 'Cooking',
        icon: '👨‍🍳',
        duration: 2500,
        reward: 80,
        location: null,
        requirements: ['ingredients'],
        description: 'Prepare meals',
        skill: 'cooking',
        difficultyMultiplier: 1.1
      },
      treasure_hunting: {
        name: 'Treasure Hunting',
        icon: '🗺️',
        duration: 6000,
        reward: 200,
        location: 'harborIsland',
        requirements: ['shovel'],
        description: 'Search for hidden treasures',
        skill: 'discovery',
        difficultyMultiplier: 1.5
      },
      gardening: {
        name: 'Gardening',
        icon: '🌱',
        duration: 3000,
        reward: 50,
        location: null,
        requirements: ['seeds', 'watering_can'],
        description: 'Grow vegetables and flowers',
        skill: 'farming',
        difficultyMultiplier: 0.9
      },
      wildlife_photography: {
        name: 'Wildlife Photography',
        icon: '📸',
        duration: 3500,
        reward: 150,
        location: 'evergreenForest',
        requirements: ['camera'],
        description: 'Photograph rare animals',
        skill: 'photography',
        difficultyMultiplier: 1.4
      },
      meditation: {
        name: 'Meditation',
        icon: '🧘',
        duration: 2000,
        reward: 25,
        location: null,
        requirements: [],
        description: 'Relax and find inner peace',
        skill: 'mindfulness',
        difficultyMultiplier: 0.7
      }
    };
  }
  
  startActivity(activityId) {
    const activity = this.activities[activityId];
    if (!activity) return false;
    
    // Check requirements
    for (const req of activity.requirements) {
      if (!inventorySystem.hasItem(req)) {
        notificationSystem.warning(`Missing: ${req}`);
        return false;
      }
    }
    
    this.activeActivity = activityId;
    this.activityProgress = 0;
    notificationSystem.info(`Started ${activity.name}`);
    return true;
  }
  
  update(deltaTime) {
    if (!this.activeActivity) return;
    
    const activity = this.activities[this.activeActivity];
    this.activityProgress += deltaTime;
    
    if (this.activityProgress >= activity.duration) {
      this.completeActivity();
    }
  }
  
  completeActivity() {
    if (!this.activeActivity) return;
    
    const activity = this.activities[this.activeActivity];
    const reward = Math.round(activity.reward * activity.difficultyMultiplier);
    
    player.addMoney(reward);
    
    // Add skill experience
    if (player.skills[activity.skill]) {
      player.skills[activity.skill] += 10;
    }
    
    notificationSystem.success(`Completed ${activity.name}! Earned $${reward}`);
    
    // Trigger particle effect
    particleSystem.emit({
      x: player.position.x,
      y: player.position.y,
      emoji: '⭐',
      count: 10,
      speed: 200,
      life: 1000
    });
    
    this.activeActivity = null;
    this.activityProgress = 0;
  }
  
  cancelActivity() {
    if (this.activeActivity) {
      notificationSystem.warning(`Cancelled ${this.activities[this.activeActivity].name}`);
      this.activeActivity = null;
      this.activityProgress = 0;
    }
  }
  
  getActivityProgress() {
    if (!this.activeActivity) return 0;
    const activity = this.activities[this.activeActivity];
    return Math.min(100, (this.activityProgress / activity.duration) * 100);
  }
  
  getAvailableActivities() {
    return Object.entries(this.activities).map(([id, activity]) => ({
      id,
      ...activity
    }));
  }
}

const activitySystem = new ActivitySystem();