
let manyLevelsUp = false; //if player got enough xp to level up more than one
let attributePoints = 0;
let levelUpXp = 10; //xp needed for level 2

class Player {
  constructor(classType, level, health, mana, strength, agility, speed, element1, element2, xp) {
    this.classType = classType;
    this.level = level;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
    this.element1 = element1;
    this.element2 = element2;
    this.xp = xp;
  }
}

let playerLevelSystem = {

  //creates 10 levels with the formula's xp required
  requiredXpLevelsArray: function() {
    LevelsXp = [levelUpXp]; //puts it in the levels array
    for (let i = 1; i < 10; i++) {
      levelUpXp = Math.round((levelUpXp + 2) * 5 - levelUpXp * 2);
      LevelsXp.push(levelUpXp);
    }
  },
  
  //checks if player leveled up and how many levels
  levelManager: function() {
    //player.TotalXp += enemy.xpReward;
    player.xp += enemy.xpReward;
    if (player.xp >= LevelsXp[player.level-1] && player.xp < LevelsXp[player.level]) {
      playerLevelSystem.playerLevelUp();
    }
    else if (player.xp >= LevelsXp[player.level]) {
      manyLevelsUp = true
      playerLevelSystem.playerLevelUp();
    }
    else {
      let getPlayerXp = document.querySelector(".player-xp");
      getPlayerXp.innerHTML = '<p>xp: ' + (player.xp) + '/' + LevelsXp[player.level-1] + '</p>';
    }
  },
 
  //adds attribute points and level every level up 
  playerLevelUp: function() {
    if (manyLevelsUp) {
      while (player.xp >= LevelsXp[player.level-1]) {
        player.xp = player.xp - LevelsXp[player.level-1]
        player.level++;

        attributePoints++;
      }
    }
    else {
      player.xp = player.xp % LevelsXp[player.level-1];
      player.level++;

      attributePoints++;
    }
    updatePlayerStats.updateLevel();
    updatePlayerStats.updateAttributes();
  }
}

//display stats and attribute points
updatePlayerStats = {

  //updates player level and shows a message
  updateLevel: function() {
    alert('Level up! You are now level ' + player.level)
    let getPlayerXp = document.querySelector(".player-xp");
    getPlayerXp.innerHTML = '<p>xp: ' + player.xp + '/' + LevelsXp[player.level-1] + '</p>';
    let getPlayerLevel = document.querySelector(".player-level")
    getPlayerLevel.innerHTML = '<p>Level: ' + player.level + '</p>';
  },

  //adds buttons to each stat with the amount of attribute points
  updateAttributes: function() {
    getPlayerHealth = document.querySelector(".player-health")
    getPlayerHealth.innerHTML = 'Health: ' + player.health + '' + '<input type="button" value="" id="health" class="attribute-btn" onclick="updatePlayerStats.addAttribute(this.id)"/>';
    
    getPlayerStrength = document.querySelector(".player-strength")
    getPlayerStrength.innerHTML = 'Strength: ' + player.strength + '' + '<input type="button" value="" id="strength" class="attribute-btn" onclick="updatePlayerStats.addAttribute(this.id)"/>';
    
    getPlayerMana = document.querySelector(".player-mana")
    getPlayerMana.innerHTML = 'Mana: ' + player.mana + '' + '<input type="button" value="" id="mana" class="attribute-btn" onclick="updatePlayerStats.addAttribute(this.id)"/>';
    
    getPlayerAgility = document.querySelector(".player-agility")
    getPlayerAgility.innerHTML = 'Agility: ' + player.agility + '' + '<input type="button" value="" id="agility" class="attribute-btn" onclick="updatePlayerStats.addAttribute(this.id)"/>';
   
    getPlayerSpeed = document.querySelector(".player-speed")
    getPlayerSpeed.innerHTML = 'Speed: ' + player.speed + '' + '<input type="button" value="" id="speed" class="attribute-btn" onclick="updatePlayerStats.addAttribute(this.id)"/>';
    
    //$('#button').style.visibilty(visable)
    //id=document.getElementById()
    let attributeButtons = document.getElementsByClassName('attribute-btn');
    //$('.attribute-btn').val('+' + attributePoints);
    for (let i = 0; i < attributeButtons.length; i++)
      $(attributeButtons[i]).val('+' + attributePoints);
  },

  //adds stats according to which button was pressed and displays new stats
  addAttribute: function(id) {
    switch (id){
      case "health":
        player.health+=10;
      break;
      case "strength":
        player.strength+=10;
      break;
      case "mana":
        player.mana+=10;
      break;
      case "agility":
        player.agility+=10;
      break;
      case "speed":
        player.speed+=10;
      break;
    }
    getPlayerHealth.innerHTML = 'Health: ' + player.health + '' + '<input type="button" value="" id="health" class="attribute-btn" onclick="updatePlayerStats.addAttribute(this.id)"/>';
    getPlayerStrength.innerHTML ='Strength: '+ player.strength + '' + '<input type="button" value="" id="strength" class="attribute-btn" onclick="updatePlayerStats.addAttribute(this.id)"/>';
    getPlayerMana.innerHTML = 'Mana: ' + player.mana + '' + '<input type="button" value="" id="mana" class="attribute-btn" onclick="updatePlayerStats.addAttribute(this.id)"/>';
    getPlayerAgility.innerHTML = 'Agility: ' + player.agility + '' + '<input type="button" value="" id="agility" class="attribute-btn" onclick="updatePlayerStats.addAttribute(this.id)"/>';
    getPlayerSpeed.innerHTML = 'Speed: ' + player.speed + '' + '<input type="button" value="" id="speed" class="attribute-btn" onclick="updatePlayerStats.addAttribute(this.id)"/>';
    
    attributePoints--
   
    //changes the number of attribute points and hides buttons when 0
    let attributeButtons = document.getElementsByClassName('attribute-btn');
    //$('.attribute-btn').val('+' + attributePoints);
        for (let i = 0; i < attributeButtons.length; i++)
      $(attributeButtons[i]).val('+' +attributePoints);
    if (attributePoints <= 0) {
      for (let i = 0; i < attributeButtons.length; i++)
        attributeButtons[i].style.display = 'none';
    }
  }
}