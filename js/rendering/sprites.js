// Sprite System
class SpriteSystem {
  constructor() {
    this.sprites = {};
    this.loadSprites();
  }
  
  loadSprites() {
    // Create simple sprite data for now
    // In production, these would be image assets
    this.sprites = {
      player: { emoji: '👤', width: 32, height: 32 },
      npc: { emoji: '👥', width: 32, height: 32 },
      building: { emoji: '🏢', width: 64, height: 64 },
      tree: { emoji: '🌲', width: 32, height: 32 },
      rock: { emoji: '🪨', width: 24, height: 24 },
      chest: { emoji: '🎁', width: 32, height: 32 },
      car: { emoji: '🚗', width: 48, height: 32 },
      bike: { emoji: '🚲', width: 32, height: 24 }
    };
  }
  
  getSprite(spriteId) {
    return this.sprites[spriteId] || { emoji: '?', width: 32, height: 32 };
  }
  
  drawSprite(ctx, spriteId, x, y, scale = 1) {
    const sprite = this.getSprite(spriteId);
    ctx.font = `${32 * scale}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(sprite.emoji, x, y);
  }
}

const spriteSystem = new SpriteSystem();