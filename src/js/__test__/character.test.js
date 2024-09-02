import Character from "../Character";
import Bowman from "../characters/Bowman";

test("Character cannot be instantiated directly", () => {
  expect(() => new Character(1, "generic")).toThrow();
});

test("Bowman has correct properties", () => {
  const bowman = new Bowman(1);
  expect(bowman.attack).toBe(25);
  expect(bowman.defence).toBe(25);
  expect(bowman.level).toBe(1);
  expect(bowman.health).toBe(100);
  expect(bowman.type).toBe("bowman");
});
