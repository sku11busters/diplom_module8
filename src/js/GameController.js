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
import GamePlay from "./GamePlay";
import cursors from "./cursors";

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;

    this.positionedCharacters = [];
    this.selectedCharacter = null;

    this.gameState = {
      currentTurn: "player",
      maxScore: 0,
      currentScore: 0,
      currentLevel: 0,
    };

    this.currentLevel = 1;

    this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this));
    this.gamePlay.addCellLeaveListener(this.onCellLeave.bind(this));
    this.gamePlay.addCellClickListener(this.onCellClick.bind(this));
    this.gamePlay.addNewGameListener(this.newGame.bind(this));
  }

  init() {
    this.gamePlay.drawUi(themes.prairie);

    const playerTypes = [Bowman, Swordsman, Magician];
    const enemyTypes = [Vampire, Undead, Daemon];

    const playerTeam = new Team(generateTeam(playerTypes, 3, 2));
    const enemyTeam = new Team(generateTeam(enemyTypes, 3, 2));

    const positionedCharacters = [];

    const occupiedPositions = new Set();

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

    this.positionedCharacters = positionedCharacters;

    this.gamePlay.redrawPositions(positionedCharacters);
  }

  onCellClick(index) {
    const character = this.findCharacterByPosition(index);

    if (
      character &&
      ["bowman", "swordsman", "magician"].includes(character.type)
    ) {
      if (this.selectedCharacter) {
        const previousCharacterPosition = this.positionedCharacters.find(
          (pc) => pc.character === this.selectedCharacter
        );
        if (previousCharacterPosition) {
          this.gamePlay.deselectCell(previousCharacterPosition.position);
        }
      }
      this.selectedCharacter = character;
      this.gamePlay.selectCell(index);
    } else if (this.selectedCharacter) {
      const selectedPosition = this.positionedCharacters.find(
        (pc) => pc.character === this.selectedCharacter
      );

      if (!selectedPosition) {
        this.selectedCharacter = null;
        return;
      }

      const moveDistance = this.calculateDistance(
        selectedPosition.position,
        index
      );
      const maxMoveDistance = this.getMaxMoveDistance(this.selectedCharacter);

      if (!character && moveDistance <= maxMoveDistance) {
        this.moveCharacter(index);
      }

      const enemy = this.findCharacterByPosition(index);
      if (enemy && !["bowman", "swordsman", "magician"].includes(enemy.type)) {
        const attackDistance = this.calculateDistance(
          selectedPosition.position,
          index
        );
        const maxAttackDistance = this.getMaxAttackDistance(
          this.selectedCharacter
        );

        if (attackDistance <= maxAttackDistance) {
          this.attackCharacter(enemy, index).then(() => {
            setTimeout(() => {
              this.computerTurn();
            }, 1000);
          });
        }
      }

      if (!character && moveDistance > maxMoveDistance) {
        GamePlay.showError("Недопустимое перемещение");
      }
    }
  }

  computerTurn() {
    const computerCharacters = this.positionedCharacters.filter(
      (pc) =>
        pc.character instanceof Vampire ||
        pc.character instanceof Undead ||
        pc.character instanceof Daemon
    );

    const playerCharacters = this.positionedCharacters.filter(
      (pc) =>
        pc.character instanceof Bowman ||
        pc.character instanceof Swordsman ||
        pc.character instanceof Magician
    );

    if (computerCharacters.length === 0) {
      this.levelUp();
      this.newGame();
      return;
    }

    if (playerCharacters.length === 0) {
      this.gameOver();
      return;
    }

    const actions = [];

    computerCharacters.forEach((attackingCharacter) => {
      const availableTargets = playerCharacters.filter((targetCharacter) => {
        const attackDistance = this.calculateDistance(
          attackingCharacter.position,
          this.positionedCharacters.find(
            (pc) => pc.character === targetCharacter.character
          ).position
        );
        const maxAttackDistance = this.getMaxAttackDistance(
          attackingCharacter.character
        );

        return attackDistance <= maxAttackDistance;
      });

      if (availableTargets.length > 0) {
        const weakestTarget = this.findWeakestCharacter(availableTargets);
        actions.push({
          attacker: attackingCharacter,
          target: weakestTarget,
        });
      }
    });

    actions.forEach(({ attacker, target }) => {
      const damage = Math.max(
        attacker.character.attack - target.character.defence,
        attacker.character.attack * 0.1
      );
      const targetIndex = this.positionedCharacters.find(
        (pc) => pc.character === target.character
      ).position;

      this.gamePlay.showDamage(targetIndex, damage).then(() => {
        target.character.health -= damage;

        if (target.character.health <= 0) {
          this.positionedCharacters = this.positionedCharacters.filter(
            (pc) => pc.character !== target.character
          );
        }

        this.gamePlay.redrawPositions(this.positionedCharacters);
      });
    });

    if (
      this.positionedCharacters.filter(
        (pc) =>
          pc.character instanceof Vampire ||
          pc.character instanceof Undead ||
          pc.character instanceof Daemon
      ).length === 0
    ) {
      this.levelUp();
      this.newGame();
    }
  }

  initTeams() {
    const playerTypes = [Bowman, Swordsman, Magician];
    const enemyTypes = [Vampire, Undead, Daemon];

    const playerTeam = new Team(
      generateTeam(playerTypes, 3, this.currentLevel)
    );
    const enemyTeam = new Team(generateTeam(enemyTypes, 3, this.currentLevel));

    const positionedCharacters = [];
    const occupiedPositions = new Set();

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

    this.positionedCharacters = positionedCharacters;
    this.gamePlay.redrawPositions(positionedCharacters);
  }

  findWeakestCharacter(characters) {
    return characters.reduce((weakest, current) => {
      if (current.character.health < weakest.character.health) {
        return current;
      }
      return weakest;
    }, characters[0]);
  }

  onCellEnter(index) {
    const character = this.findCharacterByPosition(index);

    if (character) {
      const info = this.getCharacterInfo(character);
      this.gamePlay.showCellTooltip(info, index);

      if (["bowman", "swordsman", "magician"].includes(character.type)) {
        this.gamePlay.setCursor(cursors.pointer);

        if (character === this.selectedCharacter) {
          this.gamePlay.selectCell(index, "yellow");
        }
      } else {
        this.gamePlay.setCursor(cursors.notallowed);
      }
    } else if (this.selectedCharacter) {
      const selectedCharacterPosition = this.positionedCharacters.find(
        (pc) => pc.character === this.selectedCharacter
      );

      const selectedPosition = selectedCharacterPosition
        ? selectedCharacterPosition.position
        : null;

      if (selectedPosition !== null) {
        const moveDistance = this.calculateDistance(selectedPosition, index);
        const maxMoveDistance = this.getMaxMoveDistance(this.selectedCharacter);

        if (moveDistance <= maxMoveDistance) {
          this.gamePlay.selectCell(index, "green");
          this.gamePlay.setCursor(cursors.pointer);
        } else {
          this.gamePlay.setCursor(cursors.notallowed);
        }
        const enemy = this.findCharacterByPosition(index);
        if (
          enemy &&
          !["bowman", "swordsman", "magician"].includes(enemy.type)
        ) {
          const attackDistance = this.calculateDistance(
            selectedPosition,
            index
          );
          const maxAttackDistance = this.getMaxAttackDistance(
            this.selectedCharacter
          );

          if (attackDistance <= maxAttackDistance) {
            this.gamePlay.selectCell(index, "red");
            this.gamePlay.setCursor(cursors.crosshair);
          }
        }
      }
    } else {
      this.gamePlay.setCursor(cursors.auto);
    }
  }

  moveCharacter(index) {
    const previousIndex = this.positionedCharacters.find(
      (pc) => pc.character === this.selectedCharacter
    ).position;
    this.positionedCharacters = this.positionedCharacters.map((pc) => {
      if (pc.character === this.selectedCharacter) {
        return new PositionedCharacter(pc.character, index);
      }
      return pc;
    });
    this.gamePlay.deselectCell(previousIndex);
    this.gamePlay.redrawPositions(this.positionedCharacters);
    this.selectedCharacter = null;
  }

  onCellLeave(index) {
    const character = this.findCharacterByPosition(index);
    if (character !== this.selectedCharacter) {
      this.gamePlay.hideCellTooltip(index);
      this.gamePlay.deselectCell(index);
    }
  }

  findCharacterByPosition(index) {
    return this.positionedCharacters.find((pc) => pc.position === index)
      ?.character;
  }

  getCharacterInfo(character) {
    const level = character.level || 1;
    const attack = character.attack || 0;
    const defense = character.defense || 0;
    const health = character.health || 100;

    return `🎖${level} ⚔${attack} 🛡${defense} ❤${health}`;
  }

  calculateDistance(index1, index2) {
    const x1 = index1 % 8;
    const y1 = Math.floor(index1 / 8);
    const x2 = index2 % 8;
    const y2 = Math.floor(index2 / 8);
    return Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2));
  }

  getMaxMoveDistance(character) {
    switch (character.type) {
      case "swordsman":
      case "undead":
        return 4;
      case "bowman":
      case "vampire":
        return 2;
      case "magician":
      case "daemon":
        return 1;
      default:
        return 0;
    }
  }

  getMaxAttackDistance(character) {
    switch (character.type) {
      case "swordsman":
      case "undead":
        return 1;
      case "bowman":
      case "vampire":
        return 2;
      case "magician":
      case "daemon":
        return 4;
      default:
        return 0;
    }
  }

  updateCharacterPositions() {
    this.gamePlay.redrawPositions(this.positionedCharacters);
  }

  async attackCharacter(enemy, index) {
    const attacker = this.selectedCharacter;

    const damage = Math.max(
      attacker.attack - enemy.defence,
      attacker.attack * 0.1
    );

    await this.gamePlay.showDamage(index, damage);

    enemy.health -= damage;

    if (enemy.health <= 0) {
      this.positionedCharacters = this.positionedCharacters.filter(
        (pc) => pc.character !== enemy
      );
      this.updateCharacterPositions();
    }
  }

  levelUp() {
    this.positionedCharacters.forEach((pc) => {
      if (
        pc.character instanceof Bowman ||
        pc.character instanceof Swordsman ||
        pc.character instanceof Magician
      ) {
        pc.character.level++;

        pc.character.health = Math.min(pc.character.level + 80, 100);

        const healthPercentageRemaining = (pc.character.health / 100) * 100;

        const previousAttack = pc.character.attack;
        const previousDefense = pc.character.defence;

        pc.character.attack = Math.max(
          previousAttack,
          (previousAttack * (80 + healthPercentageRemaining)) / 100
        );

        pc.character.defence = Math.max(
          previousDefense,
          (previousDefense * (80 + healthPercentageRemaining)) / 100
        );
      }
    });

    this.gameState.currentScore += 10;
    this.updateCharacterPositions();
  }

  getCurrentTheme() {
    const themesList = [
      themes.prairie,
      themes.desert,
      themes.arctic,
      themes.mountain,
    ];
    return themesList[this.themeIndex || 0];
  }

  getCurrentLevel() {
    return this.positionedCharacters[0].character.level;
  }

  gameOver() {
    this.gamePlay.setCursor("not-allowed");
    this.gamePlay.cells.forEach((cell) => {
      cell.classList.add("blocked");
    });

    if (this.gameState.currentScore > this.gameState.maxScore) {
      this.gameState.maxScore = this.gameState.currentScore;
      this.stateService.saveGame(this.gameState);
    }

    GamePlay.showMessage("Game Over! Click 'New Game' to play again.");
  }

  newGame() {
    this.currentLevel = 1;
    const themesList = [
      themes.prairie,
      themes.desert,
      themes.arctic,
      themes.mountain,
    ];

    this.themeIndex = (this.currentLevel - 1) % themesList.length;
    this.gamePlay.drawUi(themesList[this.themeIndex]);

    this.initTeams();
  }
}
