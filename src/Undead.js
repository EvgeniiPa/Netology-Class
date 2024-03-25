import { Character } from "./Character";

export class Undead extends Character {
  constructor(name, type) {
    super(name, type);

    this.attack = 10;
    this.defence = 40;
  }
}
