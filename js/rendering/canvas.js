// Canvas Rendering System
class CanvasRenderer {
  constructor() {
    this.canvas = document.getElementById('gameCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());
  }
  
  resizeCanvas() {
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
  }
  
  clear() {
    this.ctx.fillStyle = '#1a472a';
    this.ctx.fillRect(0, 0, this.width, this.height);
  }
  
  drawRect(x, y, width, height, color) {
    const screenPos = cameraSystem.worldToScreen(x, y);
    this.ctx.fillStyle = color;
    this.ctx.fillRect(screenPos.x, screenPos.y, width * cameraSystem.zoom, height * cameraSystem.zoom);
  }
  
  drawText(text, x, y, color = '#fff', size = 14) {
    const screenPos = cameraSystem.worldToScreen(x, y);
    this.ctx.fillStyle = color;
    this.ctx.font = `${size}px Arial`;
    this.ctx.textAlign = 'center';
    this.ctx.fillText(text, screenPos.x, screenPos.y);
  }
  
  drawCircle(x, y, radius, color) {
    const screenPos = cameraSystem.worldToScreen(x, y);
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.arc(screenPos.x, screenPos.y, radius * cameraSystem.zoom, 0, Math.PI * 2);
    this.ctx.fill();
  }
  
  drawImage(img, x, y, width, height) {
    const screenPos = cameraSystem.worldToScreen(x, y);
    if (img instanceof HTMLImageElement) {
      this.ctx.drawImage(img, screenPos.x, screenPos.y, width * cameraSystem.zoom, height * cameraSystem.zoom);
    }
  }
  
  drawBuildings() {
    worldSystem.buildings.forEach(building => {
      const colors = {
        residential: '#e8b4a8',
        commercial: '#c0c0c0',
        industrial: '#8b7355',
        government: '#4169e1',
        entertainment: '#ff69b4',
        educational: '#daa520',
        medical: '#ffffff',
        restaurant: '#ff6b6b',
        sports: '#00ff00'
      };
      
      const color = colors[building.type] || '#999';
      this.drawRect(building.x, building.y, building.width, building.height, color);
      this.drawText(building.name, building.x + building.width / 2, building.y + building.height / 2, '#000', 10);
    });
  }
  
  drawNPCs() {
    worldSystem.npcs.forEach(npc => {
      this.drawCircle(npc.position.x, npc.position.y, 16, npc.color);
      this.drawText(npc.avatar, npc.position.x, npc.position.y, '#fff', 16);
      this.drawText(npc.name, npc.position.x, npc.position.y - 40, '#fff', 10);
    });
  }
  
  drawPlayer() {
    this.drawCircle(player.position.x, player.position.y, 16, '#4caf50');
    this.drawText(player.avatar, player.position.x, player.position.y, '#fff', 16);
  }
  
  drawRegionLabels() {
    Object.values(WORLD_CONFIG.regions).forEach(region => {
      const centerX = region.x + region.width / 2;
      const centerY = region.y + region.height / 2;
      this.drawText(region.name, centerX, centerY, rgba(255, 255, 255, 0.5), 12);
    });
  }
}

const canvasRenderer = new CanvasRenderer();