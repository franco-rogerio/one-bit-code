class Character {
  constructor(name, lifePoints, attackPower, defensePower) {
    this.name = name;
    this.lifePoints = lifePoints;
    this.attackPower = attackPower;
    this.defensePower = defensePower;
  }
  attackTarget(target) {
    this.target = target;
    target.lifePoints -= this.attackPower - target.defensePower;
  }
}

class Thief extends Character {
  constructor(name, lifePoints, attackPower, defensePower) {
    super(name, lifePoints, attackPower, defensePower);
  }
  attackTarget(target) {
    this.target = target;
    target.lifePoints -= (this.attackPower - target.defensePower) * 2;
  }
}

class Mage extends Character {
  constructor(name, lifePoints, attackPower, defensePower, magicPower) {
    super(name, lifePoints, attackPower, defensePower);
    this.magicPower = magicPower;
  }
  attackTarget(target) {
    this.target = target; //Não precisa auto referenciar - big mistake, huge!
    target.lifePoints -=
      this.attackPower + this.magicPower - target.defensePower;
  }
  heal(target) {
    this.target = target;
    target.lifePoints += this.magicPower * 2;
  }
}

class Warrior extends Character {
  constructor(name, lifePoints, attackPower, defensePower, shieldPower) {
    super(name, lifePoints, attackPower, defensePower);
    this.shieldPower = shieldPower;
    this.stance = "attack";
  }
  attackTarget(target) {
    this.target = target;
    if (this.stance === "attack") {
      target.lifePoints -= this.attackPower - target.defensePower;
    }
  }
  switchStance() {
    if (this.stance === "attack") {
      this.stance = "defend";
      this.defensePower += this.shieldPower;
    } else {
      this.stance = "attack";
      this.defensePower -= this.shieldPower;
    }
  }
}
