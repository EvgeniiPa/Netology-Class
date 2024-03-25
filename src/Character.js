export class Character {
  constructor(name, type, attack, defence) {
    const types =["Bowman", "Swordsman", "Magician", "Daemon" , "Undead", "Zombie"]
        if(name.length >= 2 && name.length <= 10 ){
            this.name = name;
        }else{
            throw new Error("Пункт name указан с ошибкой");
        } 

        if(types.includes(type)){
          this.type = type;
        }else{
          throw new Error("Пункт type указан с ошибкой");
        }

        this.health = 100;
        this.level = 1;
        this.attack = undefined;
        this.defence = undefined;
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




