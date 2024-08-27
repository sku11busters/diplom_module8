/* eslint-disable no-unused-vars */
import themes from "./themes";
import PositionedCharacter from "./PositionedCharacter";
import { generateTeam } from "./generators";
import Bowman from "./characters/bowman";
import Swordsman from "./characters/swordsman";
import Magician from "./characters/magician";
import Vampire from "./characters/vampire";
import Undead from "./characters/undead";
import Daemon from "./characters/daemon";

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
  }

  init() {
    this.gamePlay.drawUi(themes.prairie);

    const playerTeam = generateTeam([Bowman, Swordsman, Magician], 1, 2);
    const opponentTeam = generateTeam([Vampire, Undead, Daemon], 1, 2);

    const positionedPlayerCharacters = playerTeam.characters.map(
      (character, index) => new PositionedCharacter(character, index)
    );
    const positionedOpponentCharacters = opponentTeam.characters.map(
      (character, index) => new PositionedCharacter(character, 56 + index)
    );

    this.gamePlay.redrawPositions([
      ...positionedPlayerCharacters,
      ...positionedOpponentCharacters,
    ]);
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
