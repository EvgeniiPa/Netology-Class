import Character from "./index.js";

class Bowerman extends Character{
    constructor(name, type, health, level, attack, defence){
        super(name, type, health, level, attack, defence);

    }

    levelUp(){
       super.levelUp();
    }

    damage(points){
        super.damage();
    }
}