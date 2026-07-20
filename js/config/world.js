// World Configuration for Evergreen Valley
const WORLD_CONFIG = {
  scale: 1,
  tileSize: 32,
  width: 6400,
  height: 4800,
  regions: {
    evergreenForest: {
      name: 'Evergreen Forest',
      x: 100,
      y: 100,
      width: 1200,
      height: 1000,
      color: '#2d5016',
      features: ['trails', 'campsites', 'ranger_station', 'rivers', 'waterfalls', 'caves', 'treehouses', 'mountains'],
      activities: ['camping', 'fishing', 'photography', 'hiking', 'treasure_hunting']
    },
    crystalLake: {
      name: 'Crystal Lake',
      x: 1400,
      y: 300,
      width: 1000,
      height: 800,
      color: '#4da6ff',
      features: ['beaches', 'docks', 'marinas', 'islands', 'fishing_areas'],
      activities: ['fishing_tournaments', 'boating', 'swimming', 'kayaking', 'water_sports']
    },
    pineRidgeMountains: {
      name: 'Pine Ridge Mountains',
      x: 400,
      y: 1200,
      width: 900,
      height: 900,
      color: '#8b7355',
      features: ['ski_resort', 'snow_trails', 'cabins', 'mining_areas', 'lookout_towers', 'village'],
      activities: ['skiing', 'snowboarding', 'rock_climbing', 'cave_exploration', 'mountain_rescue']
    },
    sunnyShoresCoast: {
      name: 'Sunny Shores Coast',
      x: 2600,
      y: 800,
      width: 1100,
      height: 700,
      color: '#ffd700',
      features: ['boardwalk', 'lighthouse', 'harbor', 'beach_shops', 'restaurants', 'surf_areas'],
      activities: ['surfing', 'lifeguarding', 'fishing', 'diving', 'boat_tours']
    },
    evergreenCity: {
      name: 'Evergreen City',
      x: 2400,
      y: 2200,
      width: 1200,
      height: 1200,
      color: '#696969',
      features: ['apartments', 'offices', 'shopping', 'restaurants', 'hotels', 'schools', 'hospitals', 'museums', 'parks'],
      activities: ['city_jobs', 'shopping', 'entertainment', 'dining']
    },
    maplewoodTown: {
      name: 'Maplewood Town',
      x: 600,
      y: 2600,
      width: 600,
      height: 500,
      color: '#a0826d',
      features: ['local_businesses', 'neighborhoods', 'grocery', 'gas_stations', 'cafes', 'repair_shops'],
      activities: ['shopping', 'dining', 'socializing']
    },
    goldenFieldsFarm: {
      name: 'Golden Fields Farm',
      x: 1400,
      y: 2300,
      width: 800,
      height: 900,
      color: '#daa520',
      features: ['farms', 'barns', 'animal_areas', 'orchards', 'markets', 'country_roads'],
      activities: ['farming', 'animal_care', 'harvest_events', 'horse_riding']
    },
    harborIsland: {
      name: 'Harbor Island',
      x: 3800,
      y: 1600,
      width: 700,
      height: 600,
      color: '#20b2aa',
      features: ['resorts', 'beaches', 'caves', 'wildlife_areas', 'treasure_locations'],
      activities: ['exploration', 'wildlife_photography', 'treasure_hunting', 'relaxation']
    }
  },
  buildings: {},
  npcs: {},
  items: {},
  weather: {
    sunny: { icon: '☀️', temp: 72 },
    rainy: { icon: '🌧️', temp: 55 },
    snowy: { icon: '❄️', temp: 28 },
    cloudy: { icon: '☁️', temp: 62 }
  }
};

// Building types
const BUILDING_TYPES = {
  residential: { icon: '🏠', capacity: 4 },
  commercial: { icon: '🏬', capacity: 20 },
  industrial: { icon: '🏭', capacity: 30 },
  government: { icon: '🏛️', capacity: 50 },
  entertainment: { icon: '🎪', capacity: 100 },
  educational: { icon: '🏫', capacity: 100 },
  medical: { icon: '🏥', capacity: 50 },
  restaurant: { icon: '🍽️', capacity: 50 },
  sports: { icon: '⚽', capacity: 200 }
};

// Location database
const LOCATIONS = {
  homes: {},
  businesses: {},
  landmarks: {}
};