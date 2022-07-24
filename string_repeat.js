// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"



// function repeatStr (n, s) {
//  // Create a variable to input the string
//  let string = "";
//  // loop through the string in an amount less than or equal to the integer
//  for(let i = 1; i <= n; i++) {
//   string += s
//  }
//  return string;
// }

// function repeatStr (n, s) {
//  n.forEach(element => {
//    console.log(s);
//  })
// }

// repeatStr(6, "Hello")

// OTHER SOLUTIONS
// function repeatStr (n, s) {
//  return s.repeat(n);
// }


// class Character {
//   constructor(name, health, strength) {
//     this.name = name;
//     this.health = health;
//     this.strength = strength;
//     this.xp = 0; // XP is always zero for new characters
//   }
//   // Attack a target
//   attack(target) {
//     if (this.health > 0) {
//       const damage = this.strength;
//       console.log(
//         `${this.name} attacks ${target.name} and causes ${damage} damage points`
//       ); //If when i attack my health is greater than zero, return i attacked my target and did a damage worth of my strength
//       target.health -= damage; //After the damage, reduce his health by the damage point
//       if (target.health > 0) {
//         console.log(`${target.name} has ${target.health} health points left`); //If target health > 0 (after i attack target), return the number of health left in the target
//       } else {
//         target.health = 0; //however if after i attack, target point is 0 then the point is assigned to the attacker
//         const bonusXP = 10;
//         console.log(
//           `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points`
//         );
//         this.xp += bonusXP;
//       }
//     } else {
//       console.log(`${this.name} can't attack (they've been eliminated)`); //This means that if my health is not greater than zero, then i'm eliminated
//     }
//   }
//   // Return the character description
//   describe() {
//     return `${this.name} has ${this.health} health points, ${this
//       .strength} as strength and ${this.xp} XP points`;
//   }
// }

class Character {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.gold = 10;
    this.key = 1;
    this.xp = 0; // XP is always zero for new characters
  }
  // Attack a target
  attack(target) {
    if (this.health > 0) {
      const damage = this.strength;
      console.log(
        `${this.name} attacks ${target.name} and causes ${damage} damage points`
      ); //If when i attack my health is greater than zero, return i attacked my target and did a damage worth of my strength
      target.health -= damage; //After the damage, reduce his health by the damage point
      if (target.health > 0) {
        console.log(`${target.name} has ${target.health} health points left`); //If target health > 0 (after i attack target), return the number of health left in the target
      } else {
        target.health = 0; //however if after i attack, target point is 0 then the point is assigned to the attacker
        target.gold -= 10
        target.key -= 1
        const bonusXP = 10;
        const goldPoints = 10;
        console.log(
          `${this.name} eliminated ${target.name} wins ${bonusXP} experience points, ${this.gold} gold and ${this.key} key(s)`
        );
        this.xp += bonusXP;
        this.gold += goldPoints
        this.key++
      }
    } else {
      console.log(`${this.name} can't attack (they've been eliminated)`); //This means that if my health is not greater than zero, then i'm eliminated
    }
  }
  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points, ${this
      .strength} as strength, ${this.xp} XP points, ${this.gold} golds and ${this.key} key(s)`;
  }
}
// Main acts
const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30);


console.log("Welcome to the adventure! Here are our heroes:");
console.log(aurora.describe());
console.log(glacius.describe());

// Introduced a monster
const monster = new Character("Spike", 40, 20);
console.log("A wild monster has appeared: it's named " + monster.name);

monster.attack(aurora);
monster.attack(glacius);
aurora.attack(monster);
glacius.attack(monster)
console.log(aurora.describe());
console.log(glacius.describe());
console.log(monster.describe());

