// Career System Configuration
const CAREER_CONFIG = {
  careers: {
    // Emergency Careers
    policeOfficer: {
      name: 'Police Officer',
      icon: '👮',
      category: 'emergency',
      description: 'Protect and serve the community',
      startingSalary: 2000,
      levels: [
        { level: 1, title: 'Cadet', salary: 2000, requirements: 'High School Diploma' },
        { level: 2, title: 'Officer', salary: 2800, requirements: 'Complete Training' },
        { level: 3, title: 'Senior Officer', salary: 3500, requirements: '100 Hours Patrol' },
        { level: 4, title: 'Detective', salary: 4200, requirements: 'Solve 50 Cases' },
        { level: 5, title: 'Sergeant', salary: 5000, requirements: 'Promote 5 Officers' },
        { level: 6, title: 'Chief', salary: 6000, requirements: 'Reach Level 5' }
      ],
      missions: ['patrol', 'respond_to_calls', 'investigate', 'traffic_control', 'special_events'],
      vehicles: ['police_car', 'police_motorcycle', 'police_helicopter'],
      equipment: ['badge', 'uniform', 'radio', 'handcuffs']
    },
    firefighter: {
      name: 'Firefighter',
      icon: '🚒',
      category: 'emergency',
      description: 'Fight fires and rescue civilians',
      startingSalary: 1800,
      levels: [
        { level: 1, title: 'Recruit', salary: 1800 },
        { level: 2, title: 'Firefighter', salary: 2600 },
        { level: 3, title: 'Engineer', salary: 3400 },
        { level: 4, title: 'Captain', salary: 4200 },
        { level: 5, title: 'Chief', salary: 5200 }
      ],
      missions: ['respond_to_emergencies', 'rescue', 'fire_suppression', 'training'],
      vehicles: ['fire_truck', 'ambulance'],
      equipment: ['helmet', 'gear', 'axe', 'hose']
    },
    parkRanger: {
      name: 'Park Ranger',
      icon: '🌲',
      category: 'emergency',
      description: 'Protect nature and rescue hikers',
      startingSalary: 1600,
      levels: [
        { level: 1, title: 'Junior Ranger', salary: 1600 },
        { level: 2, title: 'Ranger', salary: 2200 },
        { level: 3, title: 'Senior Ranger', salary: 2800 },
        { level: 4, title: 'Chief Ranger', salary: 3500 }
      ],
      missions: ['patrol_forest', 'rescue_hikers', 'protect_wildlife', 'maintain_parks'],
      vehicles: ['ranger_truck', 'horse'],
      equipment: ['binoculars', 'ranger_hat', 'map', 'radio']
    },
    coastGuard: {
      name: 'Coast Guard',
      icon: '⛵',
      category: 'emergency',
      description: 'Ocean rescues and patrols',
      startingSalary: 1900,
      levels: [
        { level: 1, title: 'Recruit', salary: 1900 },
        { level: 2, title: 'Seaman', salary: 2600 },
        { level: 3, title: 'Petty Officer', salary: 3400 },
        { level: 4, title: 'Commander', salary: 4300 }
      ],
      missions: ['boat_rescues', 'ocean_patrols', 'emergency_response'],
      vehicles: ['rescue_boat', 'jet_ski', 'helicopter'],
      equipment: ['life_vest', 'radio', 'flare_gun']
    },
    lifeguard: {
      name: 'Lifeguard',
      icon: '🏊',
      category: 'emergency',
      description: 'Beach safety and rescues',
      startingSalary: 1400,
      levels: [
        { level: 1, title: 'Junior Lifeguard', salary: 1400 },
        { level: 2, title: 'Lifeguard', salary: 1900 },
        { level: 3, title: 'Senior Lifeguard', salary: 2600 },
        { level: 4, title: 'Head Lifeguard', salary: 3200 }
      ],
      missions: ['beach_patrol', 'rescue_swimmers', 'monitor_conditions', 'first_aid'],
      vehicles: ['rescue_board'],
      equipment: ['whistle', 'rescue_buoy', 'first_aid_kit']
    },
    // Transportation Careers
    taxiDriver: {
      name: 'Taxi Driver',
      icon: '🚕',
      category: 'transportation',
      description: 'Transport passengers around the city',
      startingSalary: 1500,
      levels: [
        { level: 1, title: 'Rookie Driver', salary: 1500 },
        { level: 2, title: 'Experienced Driver', salary: 2200 },
        { level: 3, title: 'Elite Driver', salary: 3000 },
        { level: 4, title: 'Taxi Owner', salary: 4000 }
      ],
      missions: ['pickup_passengers', 'navigate_routes', 'earn_tips'],
      vehicles: ['taxi_car', 'luxury_car'],
      equipment: ['map', 'radio']
    },
    busDriver: {
      name: 'Bus Driver',
      icon: '🚌',
      category: 'transportation',
      description: 'Public transportation driver',
      startingSalary: 1700,
      levels: [
        { level: 1, title: 'Bus Driver', salary: 1700 },
        { level: 2, title: 'Senior Driver', salary: 2400 },
        { level: 3, title: 'Route Manager', salary: 3100 }
      ],
      missions: ['follow_routes', 'transport_citizens', 'schedule_management'],
      vehicles: ['bus', 'coach'],
      equipment: ['route_map', 'ticket_machine']
    },
    pilot: {
      name: 'Pilot',
      icon: '✈️',
      category: 'transportation',
      description: 'Commercial air pilot',
      startingSalary: 3500,
      levels: [
        { level: 1, title: 'Ground Crew', salary: 1000 },
        { level: 2, title: 'Private Pilot', salary: 2500 },
        { level: 3, title: 'Commercial Pilot', salary: 5000 }
      ],
      missions: ['flight_training', 'passenger_flights', 'cargo_delivery'],
      vehicles: ['plane', 'helicopter'],
      equipment: ['flight_suit', 'headset']
    },
    deliveryDriver: {
      name: 'Delivery Driver',
      icon: '📦',
      category: 'transportation',
      description: 'Package and food delivery',
      startingSalary: 1600,
      levels: [
        { level: 1, title: 'Delivery Rider', salary: 1600 },
        { level: 2, title: 'Senior Driver', salary: 2300 },
        { level: 3, title: 'Route Supervisor', salary: 3000 }
      ],
      missions: ['deliver_packages', 'deliver_food', 'collect_furniture'],
      vehicles: ['delivery_van', 'motorcycle', 'truck'],
      equipment: ['package', 'gps']
    },
    // Business Careers
    restaurantWorker: {
      name: 'Restaurant Worker',
      icon: '👨‍🍳',
      category: 'business',
      description: 'Work your way up in the food industry',
      startingSalary: 1200,
      levels: [
        { level: 1, title: 'Dishwasher', salary: 1200 },
        { level: 2, title: 'Cook', salary: 1800 },
        { level: 3, title: 'Server', salary: 1600 },
        { level: 4, title: 'Chef', salary: 2800 },
        { level: 5, title: 'Manager', salary: 3500 },
        { level: 6, title: 'Owner', salary: 5000 }
      ],
      missions: ['wash_dishes', 'cook_food', 'serve_customers', 'manage_staff'],
      vehicles: [],
      equipment: ['apron', 'chef_hat', 'utensils']
    },
    mechanic: {
      name: 'Mechanic',
      icon: '🔧',
      category: 'business',
      description: 'Vehicle repair and maintenance',
      startingSalary: 1800,
      levels: [
        { level: 1, title: 'Apprentice', salary: 1800 },
        { level: 2, title: 'Mechanic', salary: 2500 },
        { level: 3, title: 'Senior Mechanic', salary: 3200 },
        { level: 4, title: 'Garage Owner', salary: 4500 }
      ],
      missions: ['repair_vehicles', 'maintain_equipment', 'diagnostics'],
      vehicles: [],
      equipment: ['wrench', 'jack', 'diagnostic_tool']
    },
    farmer: {
      name: 'Farmer',
      icon: '🌾',
      category: 'business',
      description: 'Agriculture and animal husbandry',
      startingSalary: 1500,
      levels: [
        { level: 1, title: 'Farm Hand', salary: 1500 },
        { level: 2, title: 'Farmer', salary: 2200 },
        { level: 3, title: 'Farm Owner', salary: 3500 }
      ],
      missions: ['plant_crops', 'care_animals', 'harvest', 'sell_produce'],
      vehicles: ['tractor', 'farm_truck'],
      equipment: ['hoe', 'seeds', 'fertilizer']
    },
    // Creative Careers
    photographer: {
      name: 'Photographer',
      icon: '📷',
      category: 'creative',
      description: 'Capture the world through your lens',
      startingSalary: 1400,
      levels: [
        { level: 1, title: 'Amateur', salary: 1400 },
        { level: 2, title: 'Professional', salary: 2200 },
        { level: 3, title: 'Master', salary: 3200 },
        { level: 4, title: 'Studio Owner', salary: 4500 }
      ],
      missions: ['wildlife_photography', 'landscape_photography', 'event_photography'],
      vehicles: [],
      equipment: ['camera', 'lens', 'tripod']
    },
    journalist: {
      name: 'Journalist',
      icon: '📰',
      category: 'creative',
      description: 'Report on local events and stories',
      startingSalary: 1600,
      levels: [
        { level: 1, title: 'Reporter', salary: 1600 },
        { level: 2, title: 'Senior Reporter', salary: 2300 },
        { level: 3, title: 'Editor', salary: 3200 }
      ],
      missions: ['interview_npcs', 'cover_events', 'investigate', 'publish_stories'],
      vehicles: [],
      equipment: ['notebook', 'camera', 'microphone']
    },
    wildlifeResearcher: {
      name: 'Wildlife Researcher',
      icon: '🦁',
      category: 'creative',
      description: 'Study and protect wildlife',
      startingSalary: 1900,
      levels: [
        { level: 1, title: 'Research Assistant', salary: 1900 },
        { level: 2, title: 'Researcher', salary: 2600 },
        { level: 3, title: 'Senior Researcher', salary: 3500 }
      ],
      missions: ['track_animals', 'discover_species', 'study_ecosystems'],
      vehicles: [],
      equipment: ['binoculars', 'net', 'journal', 'camera']
    }
  }
};