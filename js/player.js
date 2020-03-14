let player;
//let playerAttack;
//let enemyAttack;

function Player(classType, level, health, mana, strength, agility, speed) {
  this.classType = classType;
  this.level=level;
  this.health = health;
  this.mana = mana;
  this.strength = strength;
  this.agility = agility;
  this.speed = speed;
}

let PlayerMoves = {
  calcAttack() {
    //who attacks first
    let getPlayerSpeed= player.speed;
    let getEnemySpeed= enemy.speed;
    if (getPlayerSpeed>getEnemySpeed){
      playerMoves.playerAttack();
    }
    //else enemyAttack();

  },
    //player attacks
    playerAttack(){
      let calcBaseDmg= player.strength * player.agility / 1000;
      let offsetDmg= Math.floor(Math.random()*Math.floor(10));
      let calcOutputDmg = calcBaseDmg + offsetDmg;     

      let numOfHits= Math.floor(Math.random()*Math.floor(player.agility/20))+1;
      let attackValues= [calcOutputDmg, numOfHits];
      return attackValues;
    },
    //enemy attacks
    enemyAttack(){
      let calcBaseDmg= enemy.strength * enemy.agility / 1000;
      let offsetDmg= Math.floor(Math.random()*Math.floor(10));
      let calcOutputDmg = calcBaseDmg + offsetDmg;     

      let numOfHits= Math.floor(Math.random()*Math.floor(enemy.agility/20))+1;
      let attackValues= [calcOutputDmg, numOfHits];
      return attackValues;
    }
 }