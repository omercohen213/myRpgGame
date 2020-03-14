// defend attack dodge
let gameManager = {
    
    gameStart:function(classType){
      this.resetPlayer(classType);
      this.setPreFight();
    },
    
    // What's the difference between a method and a function? i can just omit the :function because its inside an object?
    //choose class by string passed on click
    resetPlayer:function (classType){
      switch (classType){
        case 'Warrior':
           player = new Player(classType,1,200,0,200,100,50);
           break;
        case 'Rogue':     
            player = new Player(classType,1,100,0,100,150,200);
            break;
        case 'Mage': 
            player = new Player(classType,1,80,0,50,200,50);
            break;
        case 'Hunter':
            player = new Player(classType,1,200,0,50,200,100);     
            break;   
      } 
      //writes player stats inside the html
      let getInterFace = document.querySelector(".interface");
      getInterFace.innerHTML= 
      '<div><h2>'+classType+': Level '+player.level+
      '</h2><p>Health:'+player.health+
      '</p><p>Mana:'+player.mana+'</p>'+
      '</p><p>Strength:'+player.strength+'</p>'+
      '</p><p>Agility:'+player.agility+'</p>'+
      '</p><p>Speed:'+player.speed+'</p></div>';

    },
    
    setPreFight:function (){
       let getHeader = document.getElementsByClassName(".hearder");
       getHeader.innerHTML= '<h1>Task: kill an enemy!</h1>';
       let getActions = document.querySelector(".actions");
       getActions.innerHTML= '<a href="#" class="btn-prefight" onclick="gameManager.setFight()">Search for enemy!</a>';
       let getArena=document.getElementsByClassName(".arena");
       //getArena.style.visibility= "visable";

    },

    setFight:function(){
        //***fix it*** 
        //how to approach enemy name by id (last property)
        let enemies = [];
        let getEnemy = document.getElementsByClassName(".enemy");
        
        //Create enemies
        let enemy00= new Enemy ("Goblin",1,100,0,50,100,50,00);
        enemies.push(enemy00);
        let enemy01= new Enemy ("Troll",2,200,0,150,80,100,01);
        enemies.push(enemy01);
        let enemy02= new Enemy ("Goblin",3,1000,0,500,1000,5000,02);
        enemies.push(enemy02);
        
        //randomize an enemy from the array
        currentEnemy= Math.floor(Math.random()*enemies.length);
       
        //writes enemy stats inside the html
        getEnemy.innerHTML= 
        '<div><h2>'+enemies[currentEnemy].enemyType+': Level '+enemies[currentEnemy].level+           
        '</h2><p>Health:'+enemies[currentEnemy].health+
        '</p><p>Mana:'+enemies[currentEnemy].mana+'</p>'+
        '</p><p>Strength:'+enemies[currentEnemy].strength+'</p>'+
        '</p><p>Agility:'+enemies[currentEnemy].agility+'</p>'+
        '</p><p>Speed:'+enemies[currentEnemy].speed+'</p></div>';
         
        
    }
  
  }
  
  