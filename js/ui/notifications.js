// Notifications System
class NotificationSystem {
  constructor() {
    this.notifications = [];
  }
  
  show(message, type = 'info', duration = 3000) {
    const notifElement = document.createElement('div');
    notifElement.className = `notification ${type}`;
    notifElement.textContent = message;
    
    const container = document.getElementById('notifications');
    container.appendChild(notifElement);
    
    setTimeout(() => {
      notifElement.classList.add('removing');
      setTimeout(() => notifElement.remove(), 300);
    }, duration);
  }
  
  info(message) {
    this.show(message, 'info');
  }
  
  success(message) {
    this.show(message, 'success');
  }
  
  warning(message) {
    this.show(message, 'warning');
  }
  
  error(message) {
    this.show(message, 'error');
  }
}

const notificationSystem = new NotificationSystem();