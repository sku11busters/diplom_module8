import GameController from "../GameController";
import Bowman from "../characters/Bowman";

describe("GameController", () => {
  let gameController;

  beforeEach(() => {
    const mockGamePlay = {
      drawUi: jest.fn(),
      showCellTooltip: jest.fn(),
      hideCellTooltip: jest.fn(),
      redrawPositions: jest.fn(),
      addCellEnterListener: jest.fn(), 
      addCellLeaveListener: jest.fn(), 
    };
    const mockStateService = {};

    gameController = new GameController(mockGamePlay, mockStateService);
  });

  describe("getCharacterInfo", () => {
    test("should return correct character info for a Bowman", () => {
      const bowman = new Bowman(); 
      bowman.level = 1;
      bowman.attack = 25;
      bowman.defense = 10;
      bowman.health = 100;

      const result = gameController.getCharacterInfo(bowman);
      expect(result).toBe("🎖1 ⚔25 🛡10 ❤100");
    });

    test("should return correct character info with defaults", () => {
      const bowman = new Bowman();

      const result = gameController.getCharacterInfo(bowman);
      expect(result).toBe("🎖1 ⚔25 🛡0 ❤100");
    });
  });
});
