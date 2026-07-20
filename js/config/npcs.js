// NPC Configuration
const NPC_CONFIG = {
  npcs: {
    alex: {
      id: 'alex',
      name: 'Alex',
      age: 28,
      avatar: '👨‍🦰',
      color: '#e08040',
      home: { region: 'evergreenCity', x: 100, y: 100 },
      job: 'policeOfficer',
      personality: 'friendly',
      relationship: 0,
      schedule: {
        6: { action: 'wake_up', location: 'home' },
        7: { action: 'shower', location: 'home' },
        8: { action: 'breakfast', location: 'cafe' },
        9: { action: 'work', location: 'police_station' },
        17: { action: 'lunch', location: 'restaurant' },
        18: { action: 'work', location: 'police_station' },
        22: { action: 'dinner', location: 'home' },
        23: { action: 'sleep', location: 'home' }
      },
      likes: ['hiking', 'coffee', 'detective_work'],
      dislikes: ['laziness', 'crime'],
      favoriteItems: ['coffee', 'donut', 'badge']
    },
    emma: {
      id: 'emma',
      name: 'Emma',
      age: 26,
      avatar: '👩‍🦱',
      color: '#d4a574',
      home: { region: 'evergreenCity', x: 200, y: 100 },
      job: 'photographer',
      personality: 'creative',
      relationship: 0,
      schedule: {
        8: { action: 'wake_up', location: 'home' },
        9: { action: 'breakfast', location: 'home' },
        10: { action: 'photography', location: 'evergreenForest' },
        14: { action: 'lunch', location: 'cafe' },
        15: { action: 'photography', location: 'crystalLake' },
        20: { action: 'edit_photos', location: 'home' },
        22: { action: 'sleep', location: 'home' }
      },
      likes: ['nature', 'art', 'photography'],
      dislikes: ['pollution', 'rushed', 'technology']
    },
    james: {
      id: 'james',
      name: 'James',
      age: 35,
      avatar: '👨',
      color: '#6b4423',
      home: { region: 'goldenFieldsFarm', x: 150, y: 150 },
      job: 'farmer',
      personality: 'hardworking',
      relationship: 0,
      schedule: {
        5: { action: 'wake_up', location: 'home' },
        6: { action: 'farm_work', location: 'farm' },
        12: { action: 'lunch', location: 'home' },
        13: { action: 'farm_work', location: 'farm' },
        18: { action: 'maintenance', location: 'barn' },
        20: { action: 'dinner', location: 'home' },
        21: { action: 'sleep', location: 'home' }
      },
      likes: ['farming', 'animals', 'weather'],
      dislikes: ['drought', 'pests', 'waste']
    },
    sarah: {
      id: 'sarah',
      name: 'Sarah',
      age: 24,
      avatar: '👩‍🦱',
      color: '#d4a574',
      home: { region: 'sunnyShoresCoast', x: 100, y: 100 },
      job: 'lifeguard',
      personality: 'energetic',
      relationship: 0,
      schedule: {
        6: { action: 'wake_up', location: 'home' },
        7: { action: 'workout', location: 'beach' },
        8: { action: 'breakfast', location: 'cafe' },
        9: { action: 'work', location: 'beach' },
        13: { action: 'lunch', location: 'restaurant' },
        14: { action: 'work', location: 'beach' },
        18: { action: 'swimming', location: 'beach' },
        20: { action: 'dinner', location: 'home' },
        22: { action: 'sleep', location: 'home' }
      },
      likes: ['surfing', 'swimming', 'beach', 'fitness'],
      dislikes: ['staying_inside', 'pollution']
    },
    marcus: {
      id: 'marcus',
      name: 'Marcus',
      age: 32,
      avatar: '👨',
      color: '#5a4a3a',
      home: { region: 'maplewoodTown', x: 100, y: 100 },
      job: 'mechanic',
      personality: 'practical',
      relationship: 0,
      schedule: {
        7: { action: 'wake_up', location: 'home' },
        8: { action: 'breakfast', location: 'cafe' },
        9: { action: 'work', location: 'garage' },
        12: { action: 'lunch', location: 'garage' },
        13: { action: 'work', location: 'garage' },
        17: { action: 'maintenance', location: 'garage' },
        18: { action: 'dinner', location: 'restaurant' },
        22: { action: 'sleep', location: 'home' }
      },
      likes: ['vehicles', 'tools', 'fixing_things'],
      dislikes: ['laziness', 'poor_maintenance']
    }
  }
};