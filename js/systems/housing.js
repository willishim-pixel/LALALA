// Housing System
class HousingSystem {
  constructor() {
    this.homes = [];
    this.playerHomes = [];
    this.initializeHomes();
  }
  
  initializeHomes() {
    // Create homes for sale in different regions
    const homeTypes = [
      { type: 'cabin', price: 10000, description: 'Cozy forest cabin' },
      { type: 'apartment', price: 15000, description: 'City apartment' },
      { type: 'house', price: 25000, description: 'Suburban house' },
      { type: 'beach_home', price: 35000, description: 'Beachfront property' },
      { type: 'farm', price: 20000, description: 'Country farm' },
      { type: 'mountain_home', price: 30000, description: 'Mountain retreat' }
    ];
    
    homeTypes.forEach((homeType, index) => {
      this.homes.push({
        id: `home_${index}`,
        ...homeType,
        region: Object.keys(WORLD_CONFIG.regions)[index],
        rooms: [],
        furniture: [],
        owned: false
      });
    });
  }
  
  buyHome(homeId) {
    const home = this.homes.find(h => h.id === homeId);
    if (!home || home.owned || player.stats.money < home.price) return false;
    
    player.removeMoney(home.price);
    home.owned = true;
    this.playerHomes.push(homeId);
    player.home = homeId;
    
    EventEmitter.emit('homeOwnedChanged', { homeId: homeId, owned: true });
    return true;
  }
  
  addFurniture(homeId, furnitureId) {
    const home = this.homes.find(h => h.id === homeId);
    if (!home || !this.playerHomes.includes(homeId)) return false;
    
    home.furniture.push(furnitureId);
    EventEmitter.emit('furnitureAdded', { homeId: homeId, furnitureId: furnitureId });
    return true;
  }
  
  removeFurniture(homeId, furnitureId) {
    const home = this.homes.find(h => h.id === homeId);
    if (!home) return false;
    
    home.furniture = home.furniture.filter(f => f !== furnitureId);
    EventEmitter.emit('furnitureRemoved', { homeId: homeId, furnitureId: furnitureId });
    return true;
  }
  
  decorateRoom(homeId, roomName, decorations) {
    const home = this.homes.find(h => h.id === homeId);
    if (!home) return false;
    
    let room = home.rooms.find(r => r.name === roomName);
    if (!room) {
      room = { name: roomName, decorations: [] };
      home.rooms.push(room);
    }
    
    room.decorations = decorations;
    EventEmitter.emit('roomDecorated', { homeId: homeId, roomName: roomName });
    return true;
  }
  
  getHomeInfo(homeId) {
    return this.homes.find(h => h.id === homeId) || null;
  }
  
  getAvailableHomes() {
    return this.homes.filter(h => !h.owned);
  }
}

const housingSystem = new HousingSystem();