
export default class GameState {
  constructor() {
    this.currentTurn = "player";
    this.maxScore = 0;
    this.currentScore = 0;
    this.currentLevel = 0;
    this.positionedCharacters = [];
  }

  save(state) {
    localStorage.setItem('gameState', JSON.stringify(state));
  }

  load() {
    return JSON.parse(localStorage.getItem('gameState')) || {};
  }
}