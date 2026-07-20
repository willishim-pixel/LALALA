// Event utilities
const EventUtils = {
  isMouseDown: false,
  mouseX: 0,
  mouseY: 0,
  touchX: 0,
  touchY: 0,
  keysPressed: {},
  
  init() {
    // Mouse events
    document.addEventListener('mousedown', (e) => {
      this.isMouseDown = true;
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });
    
    document.addEventListener('mouseup', () => {
      this.isMouseDown = false;
    });
    
    document.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });
    
    // Touch events
    document.addEventListener('touchstart', (e) => {
      this.touchX = e.touches[0].clientX;
      this.touchY = e.touches[0].clientY;
      this.isMouseDown = true;
    });
    
    document.addEventListener('touchend', () => {
      this.isMouseDown = false;
    });
    
    document.addEventListener('touchmove', (e) => {
      this.touchX = e.touches[0].clientX;
      this.touchY = e.touches[0].clientY;
    });
    
    // Keyboard events
    document.addEventListener('keydown', (e) => {
      this.keysPressed[e.key.toLowerCase()] = true;
    });
    
    document.addEventListener('keyup', (e) => {
      this.keysPressed[e.key.toLowerCase()] = false;
    });
  },
  
  isKeyPressed(key) {
    return this.keysPressed[key.toLowerCase()] || false;
  },
  
  getMousePos() {
    return { x: this.mouseX, y: this.mouseY };
  },
  
  getTouchPos() {
    return { x: this.touchX, y: this.touchY };
  },
  
  isButtonPressed() {
    return this.isMouseDown;
  }
};
