// Particle System
class ParticleSystem {
  constructor() {
    this.particles = [];
  }
  
  emit(config) {
    for (let i = 0; i < (config.count || 10); i++) {
      const particle = {
        x: config.x,
        y: config.y,
        vx: (Math.random() - 0.5) * (config.speed || 200),
        vy: (Math.random() - 0.5) * (config.speed || 200),
        life: config.life || 1000,
        maxLife: config.life || 1000,
        emoji: config.emoji || '✨'
      };
      
      this.particles.push(particle);
    }
  }
  
  update(deltaTime) {
    this.particles = this.particles.filter(p => {
      p.x += p.vx * deltaTime / 1000;
      p.y += p.vy * deltaTime / 1000;
      p.life -= deltaTime;
      p.vy += 100 * deltaTime / 1000; // Gravity
      
      return p.life > 0;
    });
  }
  
  render(ctx) {
    this.particles.forEach(p => {
      const alpha = p.life / p.maxLife;
      ctx.globalAlpha = alpha;
      ctx.font = '14px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(p.emoji, p.x, p.y);
      ctx.globalAlpha = 1;
    });
  }
}

const particleSystem = new ParticleSystem();