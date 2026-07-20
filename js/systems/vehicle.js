// Vehicle System
class VehicleSystem {
  constructor() {
    this.vehicles = [];
    this.playerVehicles = [];
    this.initializeVehicles();
  }
  
  initializeVehicles() {
    const vehicleTypes = [
      { id: 'bicycle', name: 'Bicycle', icon: '🚲', price: 300, speed: 15, capacity: 1 },
      { id: 'motorcycle', name: 'Motorcycle', icon: '🏍️', price: 5000, speed: 60, capacity: 2 },
      { id: 'car', name: 'Car', icon: '🚗', price: 15000, speed: 80, capacity: 5 },
      { id: 'truck', name: 'Truck', icon: '🚚', price: 25000, speed: 70, capacity: 10 },
      { id: 'boat', name: 'Boat', icon: '⛵', price: 20000, speed: 40, capacity: 6 },
      { id: 'jet_ski', name: 'Jet Ski', icon: '🚤', price: 10000, speed: 50, capacity: 2 },
      { id: 'helicopter', name: 'Helicopter', icon: '🛩️', price: 100000, speed: 120, capacity: 4 },
      { id: 'plane', name: 'Plane', icon: '✈️', price: 500000, speed: 200, capacity: 6 }
    ];
    
    vehicleTypes.forEach(type => {
      this.vehicles.push({
        ...type,
        owned: false,
        condition: 100,
        fuel: 100,
        mileage: 0
      });
    });
  }
  
  buyVehicle(vehicleId) {
    const vehicle = this.vehicles.find(v => v.id === vehicleId);
    if (!vehicle || vehicle.owned || player.stats.money < vehicle.price) return false;
    
    player.removeMoney(vehicle.price);
    vehicle.owned = true;
    this.playerVehicles.push(vehicleId);
    
    EventEmitter.emit('vehiclePurchased', { vehicleId: vehicleId });
    return true;
  }
  
  useVehicle(vehicleId) {
    const vehicle = this.vehicles.find(v => v.id === vehicleId);
    if (!vehicle || !vehicle.owned) return false;
    
    player.currentVehicle = vehicleId;
    EventEmitter.emit('vehicleChanged', { vehicleId: vehicleId });
    return true;
  }
  
  maintenance(vehicleId) {
    const vehicle = this.vehicles.find(v => v.id === vehicleId);
    if (!vehicle || !vehicle.owned) return false;
    
    const cost = 100 + (100 - vehicle.condition);
    if (player.stats.money < cost) return false;
    
    player.removeMoney(cost);
    vehicle.condition = 100;
    
    EventEmitter.emit('vehicleMaintained', { vehicleId: vehicleId });
    return true;
  }
  
  refuel(vehicleId) {
    const vehicle = this.vehicles.find(v => v.id === vehicleId);
    if (!vehicle || !vehicle.owned) return false;
    
    const cost = 20;
    if (player.stats.money < cost) return false;
    
    player.removeMoney(cost);
    vehicle.fuel = 100;
    
    return true;
  }
  
  getOwnedVehicles() {
    return this.playerVehicles.map(id => this.vehicles.find(v => v.id === id)).filter(v => v);
  }
}

const vehicleSystem = new VehicleSystem();