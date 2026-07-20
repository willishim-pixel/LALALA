// Main Game Engine
class Game {
  constructor() {
    this.isRunning = false;
    this.deltaTime = 0;
    this.lastTime = Date.now();
    this.fps = 60;
    this.frameCount = 0;
    this.gameLoop = this.gameLoop.bind(this);
  }
  
  init() {
    console.log('🎮 Evergreen Adventure - Initializing...');
    
    // Initialize input system
    EventUtils.init();
    
    // Load saved game if exists
    const saveExists = StorageSystem.load();
    if (saveExists) {
      console.log('💾 Game loaded from save');
    } else {
      console.log('✨ New game started');
      this.initializeNewGame();
    }
    
    // Initialize camera
    cameraSystem.update(0, player);
    
    // Start game loop
    this.isRunning = true;
    this.start();
    
    console.log('✅ Game initialized successfully');
  }
  
  initializeNewGame() {
    // Set starting position
    player.position = { x: 1500, y: 1500 };
    
    // Give starting money
    player.addMoney(500);
    
    // Add starting items
    player.addItem('water', 2);
    player.addItem('sandwich', 1);
  }
  
  start() {
    requestAnimationFrame(this.gameLoop);
  }
  
  gameLoop() {
    const now = Date.now();
    this.deltaTime = now - this.lastTime;
    this.lastTime = now;
    
    // Update systems
    this.update(this.deltaTime);
    
    // Render
    this.render();
    
    this.frameCount++;
    
    if (this.isRunning) {
      requestAnimationFrame(this.gameLoop);
    }
  }
  
  update(deltaTime) {
    // Handle input
    this.handleInput();
    
    // Update all game systems
    timeSystem.update(deltaTime);
    weatherSystem.update(deltaTime);
    player.update(deltaTime);
    worldSystem.update(deltaTime);
    cameraSystem.update(deltaTime, player);
    animationSystem.update(deltaTime);
    particleSystem.update(deltaTime);
    
    // Update UI
    hudSystem.update();
    dialogueUISystem.update();
  }
  
  handleInput() {
    let dx = 0;
    let dy = 0;
    
    // Keyboard input
    if (EventUtils.isKeyPressed('w') || EventUtils.isKeyPressed('arrowup')) dy -= 1;
    if (EventUtils.isKeyPressed('s') || EventUtils.isKeyPressed('arrowdown')) dy += 1;
    if (EventUtils.isKeyPressed('a') || EventUtils.isKeyPressed('arrowleft')) dx -= 1;
    if (EventUtils.isKeyPressed('d') || EventUtils.isKeyPressed('arrowright')) dx += 1;
    
    // Mobile touch input (on-screen D-pad could be added)
    player.move(dx, dy);
    
    // Check for interactions
    if (EventUtils.isKeyPressed('e') || EventUtils.isKeyPressed('enter')) {
      this.checkInteractions();
    }
  }
  
  checkInteractions() {
    // Check nearby NPCs
    const nearbyNPCs = worldSystem.getNearbyNPCs(player.position, 100);
    if (nearbyNPCs.length > 0) {
      dialogueSystem.startDialogue(nearbyNPCs[0]);
    }
    
    // Check nearby buildings
    const nearbyBuildings = worldSystem.getNearbyBuildings(player.position, 100);
    if (nearbyBuildings.length > 0) {
      notificationSystem.info(`Entered ${nearbyBuildings[0].name}`);
    }
  }
  
  render() {
    // Clear canvas
    canvasRenderer.clear();
    
    // Draw world elements
    canvasRenderer.drawBuildings();
    canvasRenderer.drawNPCs();
    canvasRenderer.drawPlayer();
    
    // Render particles
    particleSystem.render(canvasRenderer.ctx);
  }
  
  pause() {
    this.isRunning = false;
  }
  
  resume() {
    this.isRunning = true;
    this.start();
  }
  
  save() {
    StorageSystem.save();
    notificationSystem.success('Game saved!');
  }
  
  quit() {
    this.save();
    this.isRunning = false;
  }
}

const game = new Game();

// Auto-save every 5 minutes
setInterval(() => {
  if (game.isRunning) {
    game.save();
  }
}, 5 * 60 * 1000);

// Save when page is about to close
window.addEventListener('beforeunload', () => {
  game.save();
});

// Initialize game when page loads
window.addEventListener('load', () => {
  game.init();
});

// Handle visibility changes
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    game.pause();
    game.save();
  } else {
    game.resume();
  }
});
