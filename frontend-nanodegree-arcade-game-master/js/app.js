/**
* @description Represents the enemy.
* @constructor
* @param {number} x , that represent the x position of the enemy.
* @param {number} y , that represent the y position of the enemy.
*/
var Enemy = function(x,y) {
  this.sprite = 'images/enemy-bug.png';
  this.x = x;
  this.y = y;
  this.speed = this.x *  Math.floor(Math.random() * (5)) + 170;
};

/**
* @description Represents the enemy update.
* @param {number} dt , that represent the dt, a time delta between ticks
*/
Enemy.prototype.update = function(dt) {
  this.x += this.speed * dt;
  if(this.x > ctx.canvas.width) {
    this.x = -101;   
  }

  //Found x-x position 
  if (this.x < 0 && this.x < 101) {
    this.valueX = 0;
  } else if (this.x >=101 && this.x < 202) {
    this.valueX = 101;
  } else if (this.x >= 202 && this.x < 303) {
    this.valueX = 202;
  } else if (this.x >= 303 && this.x < 404) {
    this.valueX = 303;
  } else if (this.x >= 404 && this.x < 505) {
    this.valueX = 404;
  }

  // How to treat collisions with the player
  if (player.x === this.valueX && player.y === this.y) {
    player.reset();
    score.loss();
  }

};

/**
* @description Draw the enemy on the screen
*/
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/**
* @description Represents the princess player.
* @constructor
*/
var Player  = function(){
  this.sprite = 'images/char-princess-girl.png';
  this.x = 2 * 101;
  this.y = 5 * 83;
}

/**
* @description Represents the player position update.
*/
Player.prototype.update = function() {
  //Stop condition: arrival at the river. Player victory and the player reset the position.
  if(this.y === 0) {
    this.reset();
    score.victory();
  }

  //Player can't move off screen
  if(this.x > 404){
    this.x = 404;
  }
  if(this.y > 415){
    this.y = 415;
  }
  if(this.x < 0){
    this.x = 0;
  } 
};

/**
* @description Draw the player on the screen
*/
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

/**
* @description Recognizes keys ←, ↑, ↓, →
*/
Player.prototype.handleInput = function(key){
  switch(key) {
    case 'left':
      this.x = this.x - 101;
      break;
    case 'right':
      this.x = this.x + 101;
      break;
    case 'up':
    this.y = this.y - 83;
      break;
    case 'down':
    this.y = this.y + 83;
      break;
  }
};

/**
* @description Reset the player position, where the col= 2 and row= 5
*/
Player.prototype.reset = function(){
  this.x = 2 * 101;
  this.y = 5 * 83;
}

/**
* @description Represents the score of player.
* @constructor
*/
var Score = function() {
  this.victories = 0;
  this.losses = 0;
};

Score.prototype.victory = function() {
  this.victories++;
  document.getElementById('victories').innerHTML = this.victories;
};

Score.prototype.loss = function() {
  this.losses++;
  document.getElementById('losses').innerHTML = this.losses;
};

// Instantiate of the objects.
// All enemy objects in an array [] allEnemies
// Player object in a variable player

var allEnemies = [];
for(var i = 0; i < 3; i++) {
  allEnemies.push(new Enemy((i+1)*101, (i+1)*83));
}
var player = new Player();
var score = new Score();

document.addEventListener('keyup', function(e) {
  var allowedKeys = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});