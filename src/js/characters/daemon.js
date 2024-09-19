import Character from "../Character";

export default class Daemon extends Character {
  constructor(level = 1) {
    super(level, 10, 10, 100, "daemon");
  }
}
