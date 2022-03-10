// Soldier
class Soldier {
  constructor (health, strength){
      this.health = health;
      this.strength = strength;
      this.attack();
      this.receiveDamage();
    }

    //method attack
    // 0 args
    // ret strength of the soldier
    attack(){
      return this.strength
    }

    //method receiveDamage
    // 1 arg = damage
    // removes received damage from health
    receiveDamage(damage){

    }
  }


// Viking

class Viking extends Soldier {
  constructor (name, health, strength){
    super(health, strength, receiveDamage());
    this.name;
    this.battleCry();
  }
  receiveDamage(damage){
    // removes received damage from health property
    //! if viking is still alive ret:
    // NAME has received DAMAGE points of damage
    //! if viking dies ret:
    // NAME has died in act of combat
  }

  battleCry(){
    return "Odin Iwns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  constructor (health, strength){
    super(health, strength, receiveDamage());
  }
  receiveDamage(damage){
    // removes received damage from health property
    //! if saxon is still alive ret:
    // A Saxon has received DAMAGE points of damage
    //! if saxon dies ret:
    // A Saxon has died in combat
  }
}

// War
class War {
  constructor(){
    this.addViking();
    this.addSaxon();
    this.vikingAttack();
    this.saxonAttack();
    this.showStatus();
  }

  /* Adds 1 `Viking` to the `vikingArmy`. 
  If you want a 10 `Viking` army, 
  you need to call this 10 times.

- should be a function
- should receive **1 argument** (a `Viking` object)
- should add the received `Viking` to the army
- **shouldn't return** anything 
*/
  addViking();

  /* The `Saxon` version of `addViking()`.

- should be a function
- should receive **1 argument** (a `Saxon` object)
- should add the received `Saxon` to the army
- **shouldn't return** anything 
*/
  addSaxon();

/* A `Saxon` (chosen at random) has their 
`receiveDamage()` method called 
with the damage equal to the `strength` of a `Viking` 
(also chosen at random). 
This should only perform a single attack 
and the `Saxon` doesn't get to attack back.

- should be a function
- should receive **0 arguments**
- should make a `Saxon` `receiveDamage()` 
  equal to the `strength` of a `Viking`
- should remove dead saxons from the army
- should return **result of calling `receiveDamage()` 
  of a `Saxon`** with the `strength` of a `Viking`
 */
  vikingAttack();

  /* The `Saxon` version of `vikingAttack()`. 
  A `Viking` receives the damage equal to the `strength` 
  of a `Saxon`.

- should be a function
- should receive **0 arguments**
- should make a `Viking` `receiveDamage()` 
  equal to the `strength` of a `Saxon`
- should remove dead vikings from the army
- should return **result of calling `receiveDamage()` 
  of a `Viking`** with the `strength` of a `Saxon`
 */
  saxonAttack();

  /* 
  Returns the current status of the `War` based on the size of the armies.

- should be a function
- should receive **0 arguments**
- **if the `Saxon` array is empty**, 
  should return **_"Vikings have won the war of the century!"_**
- **if the `Viking` array is empty**, 
  should return **_"Saxons have fought for their lives and survived another day..."_**
- **if there are at least 1 `Viking` and 1 `Saxon`**, 
  should return **_"Vikings and Saxons are still in the thick of battle."_**
   */
  showStatus();
}













// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}