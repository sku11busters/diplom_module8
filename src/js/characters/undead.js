import Character from "../Character";

export default class Undead extends Character {
  constructor(level) {
    super(level, 40, 10, 100, "undead");
  }
}
