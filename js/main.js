// defend attack dodge
let getPlayerStrength = document.querySelector(".player-strength");
let getPlayerHealth = document.querySelector(".player-health");
let getPlayerMana = document.querySelector(".player-mana");
let getPlayerAgility = document.querySelector(".player-agility");
let getPlayerSpeed = document.querySelector(".player-speed");
let playerTurn;
let enemyTurn;




let gameManager = {

  gameStart: function(classType) {
    this.addStartBtn();
    this.resetPlayer(classType);
    this.setPreFight();
  },
  addStartBtn: function(){
    
  },
  //choose class by string passed on click
  resetPlayer: function(classType) {
    var style = document.createElement('style');
    switch (classType) {
      case 'Warrior':
        player = new Player(classType, 1, 200, 0, 200, 100, 50, 'Fire', 'Water', 0);        
      style.innerHTML = `.interface div {
      background-image: url("Images/warrior.jpg");
      background-repeat: round;
      }`;
      document.head.appendChild(style);
        break;
      case 'Rogue':
        player = new Player(classType, 1, 100, 0, 1000, 150, 200, 'Earth', 'Wood', 0);
        style.innerHTML = `.interface div {
          background-image: url("Images/rogue.jpg");
          background-repeat: round;       
          color: blue;
          }`;
          document.head.appendChild(style);
        break;
      case 'Mage':
        player = new Player(classType, 1, 80, 0, 50, 200, 50, 'Metal', 'Water', 0);
        style.innerHTML = `.interface div {
          background-image: url("Images/mage.jpg");
          background-repeat: round;
          }`;
          document.head.appendChild(style);
        break;
      case 'Hunter':
        player = new Player(classType, 1, 200, 0, 50, 200, 100, 'Fire', 'Earth', 0);
        style.innerHTML = `.interface div {
          background-image: url("Images/hunter.jpg");
          background-repeat: round;
          }`;
          document.head.appendChild(style);
        break;
    }
    //writes player stats inside the html
    let getInterFace = document.querySelector(".interface");
    getInterFace.innerHTML =
      '<div><h3>' + classType + ' (' + player.element1 + ' & ' + player.element2 + ')</h3><p class="player-level">Level: ' + player.level +
      '</p><p class="player-health">Health: ' + player.health +
      '</p><p class="player-mana">Mana: ' + player.mana + '</p>' +
      '</p><p class="player-strength">Strength: ' + player.strength + '</p>' +
      '</p><p class="player-agility">Agility: ' + player.agility + '</p>' +
      '</p><p class="player-speed">Speed: ' + player.speed +
      '</p><p class="player-xp">xp: ' + player.xp + '/' + levelUpXp + '</p></div>';

  },

  setPreFight: function() {
    let getHeaderText = document.querySelector(".headerText");
    getHeaderText.innerHTML = '<h2>Task: kill an enemy!</h2>';
    let getActions = document.querySelector(".actions");
    let getArena = document.getElementsByClassName(".arena");
    getArena.innerHTML = '<a href="#" class="btn-prefight" onclick="gameManager.setFight()">Start!</a>';
    getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="gameManager.setFight()">Start!</a>';
    //let getArena=document.getElementsByClassName(".arena");
    //getArena.style.visibility= "visable";

  },

  setFight: function() {
    playerLevelSystem.requiredXpLevelsArray();
    //getActions.innerHTML = '<a href="#" class="btn-prefight" id="showActions" onclick="showActions()">Start</a>';
    let enemies = [];
    
    //Create enemies
    enemy00 = new Enemy("Goblin", 1, 100, 0, 50, 100, 50, 'Water', 15);
    enemies.push(enemy00);
    enemy01 = new Enemy("Troll", 2, 200, 0, 150, 80, 100, 'Metal', 50);
    enemies.push(enemy01);
    //enemy02 = new Enemy("Goblin", 3, 1000, 0, 500, 1000, 300,1000);
    //enemies.push(enemy02);

    let getHeader = document.getElementsByClassName(".hearder");
    getHeader.innerHTML = '<p>Choose your move!</p>'

    //creates attack buttons according to player elements
    let getActions = document.querySelector(".actions");

    getActions.innerHTML = '<a href="#" class="btn-prefight" id="basic-attack" onclick="PlayerMoves.calcAttack(null,enemy.element)">Basic Attack</a>';
    getActions.innerHTML += '<a href="#" class="btn-prefight" id="element-attack1" onclick="PlayerMoves.calcAttack(player.element1, enemy.element)"></a>';
    getActions.innerHTML += '<a href="#" class="btn-prefight" id="element-attack2" onclick="PlayerMoves.calcAttack(player.element2, enemy.element)"></a>';


    //changes button text and background color accordingly
    let getBasicAttack = document.querySelector("#basic-attack");
    let getElementAttack1 = document.querySelector("#element-attack1");
    let getElementAttack2 = document.querySelector("#element-attack2");
    getElementAttack1.innerHTML = player.element1 + " Attack";
    getElementAttack2.innerHTML = player.element2 + " Attack";
    switch (player.element1) {
      case "Fire":
        getElementAttack1.style.backgroundColor = "Red";
        break;
      case "Water":
        getElementAttack1.style.backgroundColor = "Blue";
        break;
      case "Wood":
        getElementAttack1.style.backgroundColor = "Green";
        break;
      case "Metal":
        getElementAttack1.style.backgroundColor = "Gray";
        break;
      case "Earth":
        getElementAttack1.style.backgroundColor = "Brown";
        break;
    }
    switch (player.element2) {
      case "Fire":
        getElementAttack2.style.backgroundColor = "Red";
        break;
      case "Water":
        getElementAttack2.style.backgroundColor = "Blue";
        break;
      case "Wood":
        getElementAttack2.style.backgroundColor = "Green";
        break;
      case "Metal":
        getElementAttack2.style.backgroundColor = "Gray";
        break;
      case "Earth":
        getElementAttack2.style.backgroundColor = "Brown";
        break;
    }


    //randomize an enemy from the array
    enemy = enemies[Math.floor(Math.random() * enemies.length)];

    let getEnemy = document.querySelector(".enemy");
    getEnemy.innerHTML =
      '<div><h3>' + enemy.enemyType + ' (' + enemy.element + ')</h3><p>Level: ' + enemy.level +
      '</p><p class="enemy-health">Health: ' + enemy.health +
      '</p><p>Mana: ' + enemy.mana + '</p>' +
      '</p><p>Strength: ' + enemy.strength + '</p>' +
      '</p><p>Agility: ' + enemy.agility + '</p>' +
      '</p><p>Speed:' + enemy.speed + '</p></div>';
  }
}

//switch of player element and inside switch of enemy elemnt
let PlayerMoves = {
  calcAttack: function(playerElement, enemyElement) {
    //who attacks first
    let getPlayerSpeed = player.speed;
    let getEnemySpeed = enemy.speed;
    
    //player attacks
    let playerAttack = function() {
     // switch (playerElement){
     //case "Fire": (case "null": is basic attack)
      //switch (enemyElement)
      //case "Wood": basedmg*=1.5; alert(highly effective);
      let calcBaseDmg = player.strength * player.agility / 1000;
      let offsetDmg = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDmg = calcBaseDmg + offsetDmg;
    
      let numOfHits = Math.floor(Math.random() * Math.floor(player.agility / 20)) + 1;
      let attackValues = [calcOutputDmg, numOfHits];
      return attackValues;
    }
    //enemy attacks
    let enemyAttack = function() {
    /*alert("before setTimeout");

    setTimeout(function() {
      alert("I am setTimeout");
      }, 1000); */

      let calcBaseDmg = enemy.strength * enemy.agility / 1000;
      let offsetDmg = Math.floor(Math.random() * Math.floor(10));
      let calcOutputDmg = calcBaseDmg + offsetDmg;
    
      let numOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) + 1;
      let attackValues = [calcOutputDmg, numOfHits];
      return attackValues;
    }
    //let getPlayerStrength= document.querySelector(".player-strength");
    let getPlayerHealth = document.querySelector(".player-health");
    let getEnemyHealth = document.querySelector(".enemy-health");
    
    let originalPlayerSpeed = player.speed;
    let originalEnemySpeed = enemy.speed;
    (originalPlayerSpeed>=originalEnemySpeed)?playerTurn=true:enemyTurn=true;
       
    //let originalPlayerHealth= player.health;
        if (player.health > 0 || enemy.health > 0) {
          //player attacks
          if (playerTurn) {
            playerAttackValues = playerAttack();
            totalDmg = playerAttackValues[0] * playerAttackValues[1];
            enemy.health = enemy.health - totalDmg;
            //switch
            alert("You hit the enemy for: " + playerAttackValues[0] +
              " in " + playerAttackValues[1] + " hits. Total:" + totalDmg);

            if (enemy.health <= 0) {
              getEnemyHealth.innerHTML = ("Health: 0")
              alert("You killed the enemy and got " + enemy.xpReward + "xp!");
              playerLevelSystem.levelManager();
              return;

              //create restart button instead of attack button
            }
            else
              getEnemyHealth.innerHTML = ("Health: " + enemy.health)

            player.speed = player.speed - originalEnemySpeed;
          }

          //enemy attacks
          if (player.speed < enemy.speed) {
            enemyAttackValues = enemyAttack();
            totalDmg = enemyAttackValues[0] * enemyAttackValues[1];
            player.health = player.health - totalDmg;
            alert("The enemy hit you for: " + enemyAttackValues[0] +
              " in " + enemyAttackValues[1] + " hits. Total:" + totalDmg);

            if (player.health <= 0) {
              getPlayerHealth.innerHTML = ("Health: 0")
              alert("You died!")
              return;
              //create restart button instead of attack button
            }
            else
              getPlayerHealth.innerHTML = ("Health: " + player.health)

            enemy.speed = enemy.speed - originalPlayerSpeed;
          }
        }
          if (player.speed <= 0 && enemy.speed<0){
            player.speed += originalPlayerSpeed;
            enemy.speed += originalEnemySpeed
}

         //if (enemy.speed < 0)
         // enemy.speed += originalEnemySpeed;

        player.speed = originalPlayerSpeed;
    //}
  }
}
