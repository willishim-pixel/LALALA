// Animation System
class AnimationSystem {
  constructor() {
    this.animations = [];
    this.frame = 0;
  }
  
  createAnimation(config) {
    const animation = {
      id: `anim_${Date.now()}_${Math.random()}`,
      target: config.target,
      property: config.property,
      startValue: config.startValue,
      endValue: config.endValue,
      duration: config.duration || 1000,
      easing: config.easing || 'linear',
      startTime: Date.now(),
      onComplete: config.onComplete
    };
    
    this.animations.push(animation);
    return animation.id;
  }
  
  update(deltaTime) {
    this.animations = this.animations.filter(anim => {
      const elapsed = Date.now() - anim.startTime;
      const progress = Math.min(1, elapsed / anim.duration);
      
      const easedProgress = this.easeValue(progress, anim.easing);
      const value = anim.startValue + (anim.endValue - anim.startValue) * easedProgress;
      
      if (anim.target && typeof anim.target === 'object') {
        anim.target[anim.property] = value;
      }
      
      if (progress >= 1) {
        if (anim.onComplete) {
          anim.onComplete();
        }
        return false;
      }
      
      return true;
    });
  }
  
  easeValue(t, easingType) {
    switch(easingType) {
      case 'linear': return t;
      case 'easeIn': return t * t;
      case 'easeOut': return 1 - (1 - t) * (1 - t);
      case 'easeInOut': return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      default: return t;
    }
  }
}

const animationSystem = new AnimationSystem();