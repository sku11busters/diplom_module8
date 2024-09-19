/**
 * Базовый класс, от которого наследуются классы персонажей
 * @property level - уровень персонажа, от 1 до 4
 * @property attack - показатель атаки
 * @property defence - показатель защиты
 * @property health - здоровье персонажа
 * @property type - строка с одним из допустимых значений:
 * swordsman
 * bowman
 * magician
 * daemon
 * undead
 * vampire
 */
export default class Character {
  constructor(level = 1) {
    if (new.target === Character) {
      throw new Error(
        "Cannot instantiate Character directly. Please use a subclass."
      );
    }

    this.level = level;
    this.attack = this.calculateAttack(level);
    this.defence = this.calculateDefence(level);
    this.health = Math.min(100, this.calculateHealth(level)); 
    this.type = this.constructor.name.toLowerCase();
  }

  calculateAttack(level) {
    return 10 + level * 5; 
  }

  calculateDefence(level) {
    return 5 + level * 3; 
  }

  calculateHealth(level) {
    return level + 80; 
  }
}
