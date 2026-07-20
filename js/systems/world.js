// World Management System
class WorldSystem {
  constructor() {
    this.regions = WORLD_CONFIG.regions;
    this.buildings = [];
    this.npcs = [];
    this.items = [];
    this.activeRegion = null;
    this.initializeWorld();
  }
  
  initializeWorld() {
    // Create buildings for each region
    Object.values(this.regions).forEach(region => {
      this.createBuildingsForRegion(region);
    });
    
    // Spawn NPCs
    Object.values(NPC_CONFIG.npcs).forEach(npcConfig => {
      this.npcs.push(new NPC(npcConfig));
    });
  }
  
  createBuildingsForRegion(region) {
    // Create appropriate buildings for each region
    const buildingCount = Math.floor(Math.random() * 3) + 2;
    
    for (let i = 0; i < buildingCount; i++) {
      const x = region.x + Math.random() * region.width;
      const y = region.y + Math.random() * region.height;
      
      const building = {
        id: `building_${this.buildings.length}`,
        region: region.name,
        x: x,
        y: y,
        type: this.getRandomBuildingType(),
        width: 60,
        height: 60,
        name: `Building ${this.buildings.length}`,
        occupants: []
      };
      
      this.buildings.push(building);
    }
  }
  
  getRandomBuildingType() {
    const types = Object.keys(BUILDING_TYPES);
    return types[Math.floor(Math.random() * types.length)];
  }
  
  getNearbyBuildings(position, radius = 200) {
    return this.buildings.filter(building => {
      const dx = building.x - position.x;
      const dy = building.y - position.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      return distance < radius;
    });
  }
  
  getNearbyNPCs(position, radius = 150) {
    return this.npcs.filter(npc => {
      const dx = npc.position.x - position.x;
      const dy = npc.position.y - position.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      return distance < radius;
    });
  }
  
  update(deltaTime) {
    // Update all NPCs
    this.npcs.forEach(npc => npc.update(deltaTime, timeSystem));
  }
}

const worldSystem = new WorldSystem();