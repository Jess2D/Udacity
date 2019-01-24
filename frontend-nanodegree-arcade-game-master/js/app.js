// Inimigos que nosso jogador deve evitar
var Enemy = function(x,y) {
  this.sprite = 'images/enemy-bug.png';
  this.x = x;
  this.y = y;
  this.speed = this.x * (Math.floor(Math.random() * 10));
};

/* 
  Parâmetro: dt, um delta de tempo entre ticks
  Tratamento de colisões 
*/
Enemy.prototype.update = function(dt) {
  this.x = this.x + this.speed * dt;
  if(this.x > ctx.canvas.width) {
    this.x = -100;
  }

  // Colisões com o jogador
  if((this.x == player.x) && (this.y == player.y)) {
    player.startingPosition();
    score.lossScorre();
  }
};

// Desenhe o inimigo na tela, método exigido pelo jogo
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player  = function(){
  this.sprite = 'images/char-princess-girl.png';
  this.initialPosition();
  sucess = 0;
  loss = 0;
}

Player.prototype.initialPosition = function(){
  this.x = 202; // col = 2, this.x = col * 101
  this.y = 332; // row = 4, this.x = row * 83
}

Player.prototype.update = function (){
  if(col<0){
    this.col = 0;
  }
  if(col>4){
    this.col = 4;
  }

  this.x = col * 101;
  this.y = row * 83;

  if(row == 0){
    this.initialPosition();
    this.sucess++;
  }



}
// Agora, escreva sua própria classe de jogador
// Esta classe exige um método update(), 
// um render() e um handleInput().


// Represente seus objetos como instâncias.
// Coloque todos os objetos inimgos numa array allEnemies
// Coloque o objeto do jogador numa variável chamada jogador.



// Isto reconhece cliques em teclas e envia as chaves para seu
// jogador. método handleInput(). Não é preciso mudar nada.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});