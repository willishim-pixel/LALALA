// Dialogue System
class DialogueSystem {
  constructor() {
    this.currentDialogue = null;
    this.currentNPC = null;
    this.dialogueHistory = [];
  }
  
  startDialogue(npc) {
    this.currentNPC = npc;
    this.currentDialogue = {
      npc: npc.name,
      messages: [
        { speaker: npc.name, text: npc.talk() }
      ],
      choices: this.getDialogueChoices(npc)
    };
    
    EventEmitter.emit('dialogueStarted', this.currentDialogue);
  }
  
  getDialogueChoices(npc) {
    return [
      { text: 'What\'s up?', action: 'chat', reward: 1 },
      { text: 'Want to hang out?', action: 'hangout', reward: 5 },
      { text: 'I have something for you', action: 'giveitem', reward: 10 },
      { text: 'See you later', action: 'leave', reward: 0 }
    ];
  }
  
  respondToDialogue(choiceIndex) {
    if (!this.currentDialogue || !this.currentNPC) return false;
    
    const choice = this.currentDialogue.choices[choiceIndex];
    if (!choice) return false;
    
    if (choice.action === 'chat') {
      this.currentDialogue.messages.push({
        speaker: this.currentNPC.name,
        text: 'I\'m doing great, thanks for asking!'
      });
    } else if (choice.action === 'leave') {
      this.endDialogue();
      return true;
    }
    
    // Update relationship
    this.currentNPC.relationship += choice.reward;
    
    EventEmitter.emit('dialogueResponse', { choice: choice, npc: this.currentNPC });
    return true;
  }
  
  endDialogue() {
    if (this.currentDialogue) {
      this.dialogueHistory.push(this.currentDialogue);
    }
    this.currentDialogue = null;
    this.currentNPC = null;
    EventEmitter.emit('dialogueEnded');
  }
}

const dialogueSystem = new DialogueSystem();