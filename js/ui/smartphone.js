// Smartphone System
class SmartphoneSystem {
  constructor() {
    this.element = document.getElementById('smartphone');
    this.phoneContent = document.getElementById('phone-content');
    this.btn = document.getElementById('smartphone-btn');
    this.isOpen = false;
    this.currentApp = null;
    this.init();
  }
  
  init() {
    this.btn.addEventListener('click', () => this.toggle());
    this.render();
  }
  
  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
  
  open() {
    this.isOpen = true;
    this.element.classList.remove('hidden');
    timeSystem.pause();
    this.renderHomeScreen();
  }
  
  close() {
    this.isOpen = false;
    this.element.classList.add('hidden');
    timeSystem.resume();
    this.currentApp = null;
  }
  
  renderHomeScreen() {
    const apps = [
      { id: 'contacts', icon: '👥', label: 'Contacts' },
      { id: 'messages', icon: '💬', label: 'Messages' },
      { id: 'banking', icon: '🏦', label: 'Banking' },
      { id: 'jobs', icon: '💼', label: 'Jobs' },
      { id: 'gps', icon: '🗺️', label: 'GPS' },
      { id: 'camera', icon: '📷', label: 'Camera' }
    ];
    
    let html = '<div class="phone-home-screen">';
    apps.forEach(app => {
      html += `
        <div class="phone-app-icon" onclick="smartphoneSystem.openApp('${app.id}')">
          <div style="font-size: 32px;">${app.icon}</div>
          <div class="phone-app-label">${app.label}</div>
        </div>
      `;
    });
    html += '</div>';
    
    this.phoneContent.innerHTML = html;
    this.currentApp = null;
  }
  
  openApp(appId) {
    this.currentApp = appId;
    
    switch(appId) {
      case 'contacts':
        this.renderContacts();
        break;
      case 'messages':
        this.renderMessages();
        break;
      case 'banking':
        this.renderBanking();
        break;
      case 'jobs':
        this.renderJobs();
        break;
      case 'gps':
        this.renderGPS();
        break;
      case 'camera':
        this.renderCamera();
        break;
    }
  }
  
  renderContacts() {
    let html = `
      <div class="phone-app-screen">
        <div class="phone-app-header">
          <h2 class="phone-app-title">Contacts</h2>
          <button class="phone-back-btn" onclick="smartphoneSystem.renderHomeScreen()">Back</button>
        </div>
        <ul class="contacts-list">
    `;
    
    worldSystem.npcs.forEach(npc => {
      html += `
        <li class="contact-item" onclick="smartphoneSystem.contactNPC('${npc.id}')">
          <div class="contact-avatar">${npc.avatar}</div>
          <div class="contact-info">
            <div class="contact-name">${npc.name}</div>
            <div class="contact-relationship">${npc.getRelationshipLevel()}</div>
          </div>
        </li>
      `;
    });
    
    html += '</ul></div>';
    this.phoneContent.innerHTML = html;
  }
  
  renderMessages() {
    let html = `
      <div class="phone-app-screen">
        <div class="phone-app-header">
          <h2 class="phone-app-title">Messages</h2>
          <button class="phone-back-btn" onclick="smartphoneSystem.renderHomeScreen()">Back</button>
        </div>
        <div class="message-thread">
          <div class="message received">
            <div class="message-bubble">Hey! How are you doing?</div>
          </div>
          <div class="message sent">
            <div class="message-bubble">I'm doing great! How about you?</div>
          </div>
          <div class="message received">
            <div class="message-bubble">Want to hang out later?</div>
          </div>
        </div>
      </div>
    `;
    this.phoneContent.innerHTML = html;
  }
  
  renderBanking() {
    let html = `
      <div class="phone-app-screen">
        <div class="phone-app-header">
          <h2 class="phone-app-title">Banking</h2>
          <button class="phone-back-btn" onclick="smartphoneSystem.renderHomeScreen()">Back</button>
        </div>
        <div class="bank-card">
          <div class="bank-balance">Total Balance</div>
          <div class="bank-amount">$${player.stats.money.toLocaleString()}</div>
        </div>
        <div class="bank-action-buttons">
          <button class="bank-action-btn" onclick="smartphoneSystem.transfer()">Transfer</button>
          <button class="bank-action-btn" onclick="smartphoneSystem.withdraw()">Withdraw</button>
        </div>
      </div>
    `;
    this.phoneContent.innerHTML = html;
  }
  
  renderJobs() {
    let html = `
      <div class="phone-app-screen">
        <div class="phone-app-header">
          <h2 class="phone-app-title">Job Search</h2>
          <button class="phone-back-btn" onclick="smartphoneSystem.renderHomeScreen()">Back</button>
        </div>
    `;
    
    Object.entries(CAREER_CONFIG.careers).forEach(([careerId, career]) => {
      html += `
        <div class="job-listing" onclick="smartphoneSystem.applyForJob('${careerId}')">
          <div class="job-title">${career.name}</div>
          <div class="job-salary">$${career.startingSalary.toLocaleString()}/month</div>
          <div class="job-description">${career.description}</div>
        </div>
      `;
    });
    
    html += '</div>';
    this.phoneContent.innerHTML = html;
  }
  
  renderGPS() {
    let html = `
      <div class="phone-app-screen">
        <div class="phone-app-header">
          <h2 class="phone-app-title">GPS</h2>
          <button class="phone-back-btn" onclick="smartphoneSystem.renderHomeScreen()">Back</button>
        </div>
        <div class="map-container"></div>
        <div class="map-controls">
          <button class="map-btn" onclick="smartphoneSystem.zoomMap(1)">+</button>
          <button class="map-btn" onclick="smartphoneSystem.zoomMap(-1)">-</button>
        </div>
      </div>
    `;
    this.phoneContent.innerHTML = html;
  }
  
  renderCamera() {
    let html = `
      <div class="phone-app-screen">
        <div class="phone-app-header">
          <h2 class="phone-app-title">Camera</h2>
          <button class="phone-back-btn" onclick="smartphoneSystem.renderHomeScreen()">Back</button>
        </div>
        <div class="camera-viewfinder">📷</div>
        <div class="camera-controls">
          <button class="camera-btn" onclick="smartphoneSystem.takePhoto()">Capture</button>
        </div>
      </div>
    `;
    this.phoneContent.innerHTML = html;
  }
  
  contactNPC(npcId) {
    const npc = worldSystem.npcs.find(n => n.id === npcId);
    if (!npc) return;
    dialogueSystem.startDialogue(npc);
    this.close();
  }
  
  applyForJob(careerId) {
    careerSystem.applyForCareer(careerId);
    hudSystem.addNotification(`Applied for ${CAREER_CONFIG.careers[careerId].name}!`, 'success');
    this.renderHomeScreen();
  }
  
  takePhoto() {
    player.addItem('photo', 1);
    hudSystem.addNotification('Photo captured!', 'success');
  }
  
  transfer() {
    hudSystem.addNotification('Transfer feature coming soon!', 'info');
  }
  
  withdraw() {
    hudSystem.addNotification('Withdraw feature coming soon!', 'info');
  }
  
  zoomMap(direction) {
    hudSystem.addNotification('Zoom: ' + direction, 'info');
  }
  
  render() {
    if (this.isOpen) {
      this.renderHomeScreen();
    }
  }
}

const smartphoneSystem = new SmartphoneSystem();