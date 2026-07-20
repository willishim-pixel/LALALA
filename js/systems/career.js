// Career System
class CareerSystem {
  constructor() {
    this.playerCareers = {};
    this.careerLocations = {};
    this.activeMissions = [];
  }
  
  applyForCareer(careerId) {
    if (!CAREER_CONFIG.careers[careerId]) return false;
    
    const career = CAREER_CONFIG.careers[careerId];
    player.setCareer(careerId);
    
    EventEmitter.emit('careerApplied', {
      career: careerId,
      name: career.name,
      salary: career.startingSalary
    });
    
    return true;
  }
  
  completeWork(careerId, hoursWorked) {
    const career = CAREER_CONFIG.careers[careerId];
    if (!career) return 0;
    
    const level = player.careerLevel;
    const levelConfig = career.levels[level - 1];
    const hourlyWage = levelConfig.salary / 8; // Assume 8-hour workday
    const pay = hourlyWage * hoursWorked;
    
    player.addMoney(Math.round(pay));
    player.gainCareerExp(50 * hoursWorked);
    
    return Math.round(pay);
  }
  
  getMissionForCareer(careerId) {
    const career = CAREER_CONFIG.careers[careerId];
    if (!career || career.missions.length === 0) return null;
    
    const mission = career.missions[Math.floor(Math.random() * career.missions.length)];
    return {
      id: `mission_${Date.now()}`,
      career: careerId,
      type: mission,
      reward: 100 + Math.random() * 200,
      difficulty: Math.random() * 5,
      completed: false
    };
  }
  
  completeMission(missionId) {
    const mission = this.activeMissions.find(m => m.id === missionId);
    if (!mission) return false;
    
    player.addMoney(mission.reward);
    player.gainCareerExp(100);
    
    this.activeMissions = this.activeMissions.filter(m => m.id !== missionId);
    
    return true;
  }
  
  getCareerInfo(careerId) {
    return CAREER_CONFIG.careers[careerId] || null;
  }
  
  getCareerProgression(careerId) {
    const career = CAREER_CONFIG.careers[careerId];
    if (!career) return null;
    
    return {
      currentLevel: player.careerLevel,
      levels: career.levels,
      exp: player.careerExp,
      expNeeded: 1000
    };
  }
}

const careerSystem = new CareerSystem();