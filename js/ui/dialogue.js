// Dialogue UI System
class DialogueUISystem {
  constructor() {
    this.box = document.getElementById('dialogue-box');
    this.characterPortrait = document.getElementById('character-portrait');
    this.characterName = document.getElementById('character-name');
    this.dialogueText = document.getElementById('dialogue-text');
    this.choicesContainer = document.getElementById('dialogue-choices');
    this.init();
  }
  
  init() {
    EventEmitter.on('dialogueStarted', (dialogue) => this.show(dialogue));
    EventEmitter.on('dialogueEnded', () => this.hide());
  }
  
  show(dialogue) {
    this.box.classList.remove('hidden');
    
    const npc = worldSystem.npcs.find(n => n.name === dialogue.npc);
    if (!npc) return;
    
    this.characterPortrait.textContent = npc.avatar;
    this.characterName.textContent = npc.name;
    this.dialogueText.textContent = dialogue.messages[dialogue.messages.length - 1].text;
    
    this.choicesContainer.innerHTML = '';
    dialogue.choices.forEach((choice, index) => {
      const btn = document.createElement('button');
      btn.className = 'dialogue-choice';
      btn.textContent = choice.text;
      btn.onclick = () => dialogueSystem.respondToDialogue(index);
      this.choicesContainer.appendChild(btn);
    });
  }
  
  hide() {
    this.box.classList.add('hidden');
  }
  
  update() {
    if (dialogueSystem.currentDialogue) {
      this.show(dialogueSystem.currentDialogue);
    }
  }
}

const dialogueUISystem = new DialogueUISystem();