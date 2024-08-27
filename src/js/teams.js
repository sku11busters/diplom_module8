import { Bowman } from "./characters/bowman";
import { Swordsman } from "./characters/swordsman";
import { Magician } from "./characters/magician";
import { Vampire } from "./characters/vampire";
import { Undead } from "./characters/undead";
import { Daemon } from "./characters/daemon";

const characterClasses = {
  bowman: Bowman,
  swordsman: Swordsman,
  magician: Magician,
  vampire: Vampire,
  undead: Undead,
  daemon: Daemon,
};

function createRandomCharacter(level) {
  const types = Object.keys(characterClasses);
  const type = types[Math.floor(Math.random() * types.length)];
  const CharacterClass = characterClasses[type];
  return new CharacterClass(level);
}

function createTeam(size, level) {
  return Array.from({ length: size }, () => createRandomCharacter(level));
}
