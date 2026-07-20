// Quest/Mission System
class QuestSystem {
  constructor() {
    this.quests = {};
    this.activeQuests = [];
    this.completedQuests = [];
    this.initializeQuests();
  }
  
  initializeQuests() {
    // Tutorial quests
    this.quests = {
      intro_career: {
        id: 'intro_career',
        title: 'Find Your Path',
        description: 'Apply for a job to start your career',
        objectives: ['Apply for a career'],
        reward: 100,
        completed: false
      },
      intro_home: {
        id: 'intro_home',
        title: 'Home Sweet Home',
        description: 'Purchase your first home',
        objectives: ['Buy a house'],
        reward: 200,
        completed: false
      },
      intro_vehicle: {
        id: 'intro_vehicle',
        title: 'On the Road',
        description: 'Buy your first vehicle',
        objectives: ['Purchase a vehicle'],
        reward: 150,
        completed: false
      },
      meet_npcs: {
        id: 'meet_npcs',
        title: 'Make Friends',
        description: 'Talk to 5 different NPCs',
        objectives: ['Talk to NPCs', '0/5'],
        reward: 100,
        completed: false
      },
      earn_money: {
        id: 'earn_money',
        title: 'Getting Rich',
        description: 'Earn $1000',
        objectives: ['Earn money', '$0/1000'],
        reward: 200,
        completed: false
      },
      explore_regions: {
        id: 'explore_regions',
        title: 'Explorer',
        description: 'Visit all 8 regions',
        objectives: ['Visit regions', '0/8'],
        reward: 300,
        completed: false
      }
    };
  }
  
  activateQuest(questId) {
    const quest = this.quests[questId];
    if (!quest || quest.completed) return false;
    
    this.activeQuests.push(questId);
    notificationSystem.info(`Quest: ${quest.title}`);
    return true;
  }
  
  completeQuest(questId) {
    const quest = this.quests[questId];
    if (!quest) return false;
    
    quest.completed = true;
    this.activeQuests = this.activeQuests.filter(q => q !== questId);
    this.completedQuests.push(questId);
    
    player.addMoney(quest.reward);
    notificationSystem.success(`Quest Complete: ${quest.title}! Earned $${quest.reward}`);
    
    return true;
  }
  
  getActiveQuests() {
    return this.activeQuests.map(id => this.quests[id]).filter(q => q);
  }
  
  getAvailableQuests() {
    return Object.values(this.quests).filter(q => !q.completed && !this.activeQuests.includes(q.id));
  }
}

const questSystem = new QuestSystem();