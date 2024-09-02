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
  constructor(level, attack, defence, health, type = "generic") {
    if (new.target === Character) {
      throw new Error(
        "Cannot instantiate Character directly. Please use a subclass."
      );
    }

    this.level = level;
    this.attack = attack;
    this.defence = defence;
    this.health = health;
    this.type = type;
  }
}
