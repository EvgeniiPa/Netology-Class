import { Character } from "./Character";

export class Zombie extends Character {
  constructor(name, type) {
    super(name, type);

    this.attack = 10;
    this.defence = 40;
  }
}