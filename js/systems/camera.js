// Camera System
class CameraSystem {
  constructor(canvasWidth, canvasHeight) {
    this.x = 0;
    this.y = 0;
    this.width = canvasWidth;
    this.height = canvasHeight;
    this.targetX = 0;
    this.targetY = 0;
    this.speed = 0.1;
    this.zoom = 1;
    this.targetZoom = 1;
  }
  
  update(deltaTime, targetObject) {
    if (targetObject) {
      this.targetX = targetObject.position.x - this.width / 2;
      this.targetY = targetObject.position.y - this.height / 2;
    }
    
    // Smooth camera movement
    this.x += (this.targetX - this.x) * this.speed;
    this.y += (this.targetY - this.y) * this.speed;
    
    // Smooth zoom
    this.zoom += (this.targetZoom - this.zoom) * this.speed;
  }
  
  setTarget(x, y) {
    this.targetX = x - this.width / 2;
    this.targetY = y - this.height / 2;
  }
  
  zoomIn() {
    this.targetZoom = Math.min(3, this.targetZoom + 0.1);
  }
  
  zoomOut() {
    this.targetZoom = Math.max(0.5, this.targetZoom - 0.1);
  }
  
  setZoom(zoom) {
    this.targetZoom = Math.max(0.5, Math.min(3, zoom));
  }
  
  worldToScreen(worldX, worldY) {
    return {
      x: (worldX - this.x) * this.zoom,
      y: (worldY - this.y) * this.zoom
    };
  }
  
  screenToWorld(screenX, screenY) {
    return {
      x: screenX / this.zoom + this.x,
      y: screenY / this.zoom + this.y
    };
  }
}

const cameraSystem = new CameraSystem(800, 600);