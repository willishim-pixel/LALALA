// Storage utilities
const StorageSystem = {
  SAVE_KEY: 'evergreen_adventure_save',
  
  save() {
    const gameData = {
      player: {
        position: player.position,
        stats: player.stats,
        career: player.career,
        careerLevel: player.careerLevel,
        inventory: player.inventory,
        skills: player.skills,
        relationships: player.relationships
      },
      time: {
        gameTime: timeSystem.gameTime,
        dayOfWeek: timeSystem.dayOfWeek,
        season: timeSystem.season
      },
      housing: {
        playerHomes: housingSystem.playerHomes,
        homes: housingSystem.homes
      },
      vehicles: {
        playerVehicles: vehicleSystem.playerVehicles,
        vehicles: vehicleSystem.vehicles
      },
      npcs: worldSystem.npcs.map(npc => ({
        id: npc.id,
        relationship: npc.relationship,
        position: npc.position
      }))
    };
    
    StorageUtils.save(this.SAVE_KEY, gameData);
    return gameData;
  },
  
  load() {
    const gameData = StorageUtils.load(this.SAVE_KEY);
    if (!gameData) return false;
    
    // Restore player data
    if (gameData.player) {
      player.position = gameData.player.position;
      player.stats = gameData.player.stats;
      player.career = gameData.player.career;
      player.careerLevel = gameData.player.careerLevel;
      player.inventory = gameData.player.inventory;
      player.skills = gameData.player.skills;
      player.relationships = gameData.player.relationships;
    }
    
    // Restore time
    if (gameData.time) {
      timeSystem.gameTime = gameData.time.gameTime;
      timeSystem.dayOfWeek = gameData.time.dayOfWeek;
      timeSystem.season = gameData.time.season;
    }
    
    // Restore housing
    if (gameData.housing) {
      housingSystem.playerHomes = gameData.housing.playerHomes;
      housingSystem.homes = gameData.housing.homes;
    }
    
    // Restore vehicles
    if (gameData.vehicles) {
      vehicleSystem.playerVehicles = gameData.vehicles.playerVehicles;
      vehicleSystem.vehicles = gameData.vehicles.vehicles;
    }
    
    // Restore NPC relationships
    if (gameData.npcs) {
      gameData.npcs.forEach(npcData => {
        const npc = worldSystem.npcs.find(n => n.id === npcData.id);
        if (npc) {
          npc.relationship = npcData.relationship;
          npc.position = npcData.position;
        }
      });
    }
    
    return true;
  },
  
  deleteSave() {
    StorageUtils.remove(this.SAVE_KEY);
  }
};
