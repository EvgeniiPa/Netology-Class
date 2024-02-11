export class Character {
  constructor(name, type, health, level, attack, defence) {
        if(name.length >= 2 && name.length <= 10 && type == "Bowman" || type == "Swordsman" || type == "Magician" ||  type == "Daemon" || type == "Undead"|| type == "Zombie"){
            this.name = name;
            this.type = type;
            this.health = health;
            this.level = level;
            this.attack = attack;
            this.defence = defence;
        }else{
            throw new Error("Пункт name или tupe указан с ошибкой");
        } 
  }

  levelUp() {
    if (this.health != 0) {
      this.level += 1;
      this.attack = (this.attack / 100) * 20 + this.attack;
      this.health = 100;
    } else if (this.health == 0) {
      console.error("нельзя повысить левел умершего");
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}

const druid = new Character("d","Bowerman", 10, 1, 112, 20)

druid.levelUp()