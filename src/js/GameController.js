/* eslint-disable no-unused-vars */
import themes from "./themes";
import PositionedCharacter from "./PositionedCharacter";
import { generateTeam } from "./generators";
import Bowman from "./characters/Bowman";
import Swordsman from "./characters/Swordsman";
import Magician from "./characters/Magician";
import Vampire from "./characters/Vampire";
import Undead from "./characters/Undead";
import Daemon from "./characters/Daemon";
import Team from "./Team";

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
  }

  init() {
    this.gamePlay.drawUi(themes.prairie);

    const playerTypes = [Bowman, Swordsman, Magician];
    const enemyTypes = [Vampire, Undead, Daemon];

    const playerTeam = new Team(generateTeam(playerTypes, 3, 2));
    const enemyTeam = new Team(generateTeam(enemyTypes, 3, 2));

    const positionedCharacters = [];

    const occupiedPositions = new Set();

    // Функция для генерации уникальной позиции
    const generateUniquePosition = (startCol, endCol) => {
      let position;
      do {
        const row = Math.floor(Math.random() * 8);
        const col =
          startCol + Math.floor(Math.random() * (endCol - startCol + 1));
        position = row * 8 + col;
      } while (occupiedPositions.has(position));
      occupiedPositions.add(position);
      return position;
    };

    playerTeam.characters.forEach((character) => {
      const position = generateUniquePosition(0, 1);
      positionedCharacters.push(new PositionedCharacter(character, position));
    });

    enemyTeam.characters.forEach((character) => {
      const position = generateUniquePosition(6, 7);
      positionedCharacters.push(new PositionedCharacter(character, position));
    });

    this.gamePlay.redrawPositions(positionedCharacters);
  }

  onCellClick(index) {
    // TODO: react to click
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}
