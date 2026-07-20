// Item Configuration
const ITEMS_CONFIG = {
  items: {
    // Consumables
    coffee: {
      id: 'coffee',
      name: 'Coffee',
      icon: '☕',
      type: 'consumable',
      price: 5,
      description: 'A warm cup of coffee',
      effects: { energy: 20, mood: 10 }
    },
    sandwich: {
      id: 'sandwich',
      name: 'Sandwich',
      icon: '🥪',
      type: 'consumable',
      price: 8,
      description: 'Delicious sandwich',
      effects: { hunger: 50, energy: 15 }
    },
    pizza: {
      id: 'pizza',
      name: 'Pizza',
      icon: '🍕',
      type: 'consumable',
      price: 15,
      description: 'Hot fresh pizza',
      effects: { hunger: 80, mood: 25 }
    },
    donut: {
      id: 'donut',
      name: 'Donut',
      icon: '🍩',
      type: 'consumable',
      price: 3,
      description: 'Sweet glazed donut',
      effects: { energy: 10, mood: 15 }
    },
    water: {
      id: 'water',
      name: 'Water Bottle',
      icon: '💧',
      type: 'consumable',
      price: 2,
      description: 'Fresh drinking water',
      effects: { energy: 5, hunger: 10 }
    },
    // Equipment
    camera: {
      id: 'camera',
      name: 'Camera',
      icon: '📷',
      type: 'equipment',
      price: 500,
      description: 'Professional camera for photography',
      career: 'photographer'
    },
    fishing_rod: {
      id: 'fishing_rod',
      name: 'Fishing Rod',
      icon: '🎣',
      type: 'equipment',
      price: 150,
      description: 'Quality fishing rod',
      activity: 'fishing'
    },
    tent: {
      id: 'tent',
      name: 'Tent',
      icon: '⛺',
      type: 'equipment',
      price: 200,
      description: 'Camping tent',
      activity: 'camping'
    },
    bicycle: {
      id: 'bicycle',
      name: 'Bicycle',
      icon: '🚴',
      type: 'vehicle',
      price: 300,
      description: 'Mountain bike',
      maxSpeed: 15
    },
    skateboard: {
      id: 'skateboard',
      name: 'Skateboard',
      icon: '🛹',
      type: 'equipment',
      price: 100,
      description: 'Cool skateboard',
      activity: 'skateboarding'
    },
    // Collectibles
    seashell: {
      id: 'seashell',
      name: 'Seashell',
      icon: '🐚',
      type: 'collectible',
      price: 50,
      description: 'Pretty seashell from the beach'
    },
    fossil: {
      id: 'fossil',
      name: 'Fossil',
      icon: '🦴',
      type: 'collectible',
      price: 200,
      description: 'Ancient fossil'
    },
    gem: {
      id: 'gem',
      name: 'Gem',
      icon: '💎',
      type: 'collectible',
      price: 500,
      description: 'Precious gem'
    },
    // Special Items
    badge: {
      id: 'badge',
      name: 'Police Badge',
      icon: '🎖️',
      type: 'special',
      price: 0,
      description: 'Police officer badge',
      career: 'policeOfficer'
    },
    chef_hat: {
      id: 'chef_hat',
      name: 'Chef Hat',
      icon: '👨‍🍳',
      type: 'special',
      price: 0,
      description: 'Professional chef hat',
      career: 'restaurantWorker'
    }
  }
};