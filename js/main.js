let enemies = [];

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
       //let getArena=document.getElementsByClassName(".arena");
       //getArena.style.visibility= "visable";

    },

    setFight:function(){
        //***fix it*** 
        //how to approach enemy name by id (last property)
        
        
        
        //Create enemies
        enemy00= new Enemy ("Goblin",1,100,0,50,100,50,00);
        enemies.push(enemy00);
        enemy01= new Enemy ("Troll",2,200,0,150,80,100,01);
        enemies.push(enemy01);
        enemy02= new Enemy ("Goblin",3,1000,0,500,1000,5000,02);
        enemies.push(enemy02);
        
        let getHeader = document.getElementsByClassName(".hearder");
        getHeader.innerHTML= '<p>Choose your move!</p>'
        
        let getActions = document.querySelector(".actions");
        getActions.innerHTML= '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack</a>';
      
        //randomize an enemy from the array
        enemy= enemies[Math.floor(Math.random()*enemies.length)];

        let getEnemy = document.querySelector(".enemy");
        getEnemy.innerHTML= 
        '<div><h2>'+enemy.enemyType+': Level '+enemy.level+           
        '</h2><p>Health:'+enemy.health+
        '</p><p>Mana:'+enemy.mana+'</p>'+
        '</p><p>Strength:'+enemy.strength+'</p>'+
        '</p><p>Agility:'+enemy.agility+'</p>'+
        '</p><p>Speed:'+enemy.speed+'</p></div>';    
      }
  
  }
  
  