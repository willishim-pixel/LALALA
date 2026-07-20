// Inventory System
class InventorySystem {
  constructor() {
    this.items = [];
  }
  
  addItem(itemId, quantity = 1) {
    const item = ITEMS_CONFIG.items[itemId];
    if (!item) return false;
    
    return player.addItem(itemId, quantity);
  }
  
  removeItem(itemId, quantity = 1) {
    return player.removeItem(itemId, quantity);
  }
  
  hasItem(itemId, quantity = 1) {
    const count = player.inventory.filter(item => item.id === itemId).length;
    return count >= quantity;
  }
  
  getInventory() {
    return player.inventory;
  }
  
  consumeItem(itemId) {
    return player.consumeItem(itemId);
  }
  
  sellItem(itemId, quantity = 1) {
    const item = ITEMS_CONFIG.items[itemId];
    if (!item || !player.removeItem(itemId, quantity)) return false;
    
    player.addMoney(item.price * quantity);
    EventEmitter.emit('itemSold', { itemId: itemId, quantity: quantity, money: item.price * quantity });
    return true;
  }
  
  buyItem(itemId, quantity = 1) {
    const item = ITEMS_CONFIG.items[itemId];
    if (!item) return false;
    
    const totalCost = item.price * quantity;
    if (player.stats.money < totalCost) return false;
    
    player.removeMoney(totalCost);
    player.addItem(itemId, quantity);
    
    EventEmitter.emit('itemBought', { itemId: itemId, quantity: quantity });
    return true;
  }
}

const inventorySystem = new InventorySystem();