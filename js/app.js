var allEnemies   =[];
var enemyPosition=[60, 140, 220];
var scoreArray   =[];
var livesArray   =[];
var lives        =document.querySelector('.liveCount');
var score        = document.querySelector('.scoreCount');


// Enemies our player must avoid
var Enemy = function(x, y, speed) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  this.x = x;
  this.y = y;
  this.speed = speed;

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
};

  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x += this.speed * dt;

  // when off canvas, reset position of enemy to move across again
  if (this.x > 500) {
    this.x = -100;
    this.speed = 100 + Math.floor(Math.random() * 256);
  }

  // Check for collision between player and enemies
  if (player.x < this.x + 60 && player.x + 60 > this.x && player.y < this.y + 30 && 30 + player.y > this.y) {
       player.x = 200;
       player.y = 400;
       livescount();
  } 

}
  // game over function
function gOver(){
  swal({
    title: "Game Over! :(",
    text: "lives over :( ",
    icon: "false",
    button: "Try Again!"
  });
}

  // Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
 };

  // Now write your own player class
  // This class requires an update(), render() and
  // a handleInput() method.
var Player = function(x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.playerIm = 'images/char-pink-girl.png';
};

Player.prototype.update = function() {
  // Check for player reaching top of canvas and winning the game
  if (this.y < 0) {
    this.x = 200;
    this.y = 400;
    }
};

Player.prototype.render = function() {  
  ctx.drawImage(Resources.get(this.playerIm), this.x, this.y);
 };

Player.prototype.handleInput = function(keyPress) {

  if(keyPress == 'left' && this.x > 0){ 
      this.x -= 101; 
  } 
  if(keyPress == 'right' && this.x < 400){ 
      this.x += 101; 
  } 
  if(keyPress == 'up' && this.y > 0){ 
      this.y -= 83; 
  } 
  if(keyPress == 'down' && this.y < 400){ 
      this.y += 83; 
  } 

  if (this.y < 0){
    setTimeout(function(){
    this.x = 200 ;
    this.y = 400 ;
  },500)
  scorepoint();
  }
};

  // Now instantiate your objects.
  // Place all enemy objects in an array called allEnemies
  // Place the player object in a variable called player


  // Now instantiate your objects.
  // Place all enemy objects in an array called allEnemies
  // Place the player object in a variable called player
  var allEnemies = [];

  // Position "y" where the enemies will are created
  var enemyPosition = [60, 140, 220];
  var player = new Player(200, 400, 50);
  var enemy;
enemyPosition.forEach(function(positionY) {

  enemy = new Enemy(0, positionY, 100 + Math.floor(Math.random() * 512));
  allEnemies.push(enemy);
});
  //count score

function scorepoint(){
  scoreArray.push(50);
  console.log(scoreArray);
  if(scoreArray.length === 1){
    score.innerText =+ 50;}
  else if (scoreArray.length === 2) {
    score.innerText =+ (50*2);
  }
  else if (scoreArray.length === 3) {
    score.innerText =+ (50*3);
  }
  else if (scoreArray.length === 4) {
    score.innerText =+ (50*4);
  }
  else if (scoreArray.length === 5) {
    score.innerText =+ (50*5);
  }
  else if (scoreArray.length === 6) {
    score.innerText =+ (50*6);
  }
  else if (scoreArray.length === 7) {
    score.innerText =+ (50*7);
  }
  else if (scoreArray.length === 8) {
    score.innerText =+ (50*8);
  }
  else if (scoreArray.length === 9) {
    score.innerText =+ (50*9);
  }
  else if (scoreArray.length === 10) {
    score.innerText =+ (50*10);
  
  swal({
  title:"Gongrats !!! :)",
  text: "you Win . your score 500 point",
  icon: "success",
  button: "Aww yiss!",
  timer:5000,
  });
  setTimeout(function(){
    location,reload();
  },5000)
  }
}

function livescount(){
  livesArray.push('livesArray');
  console.log(livesArray.length);

  if(livesArray.length === 1){
      lives.innerText = (5-1);
  }
  if(livesArray.length === 2){
      lives.innerText = (5-2); 
  }

  if(livesArray.length === 3){
      lives.innerText = (5-3);
  }
  if(livesArray.length === 4){
      lives.innerText = (5-4);
  }
  if(livesArray.length === 5){
      lives.innerText = (5-5);
  }
  if(livesArray.length === 5){
      lives.innerText = 0 ;
      gOver();
      setTimeout(function(){
          location.reload();

      },3000)  
    }
}

  // This listens for key presses and sends the keys to your
  // Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
  37:'left',
  38: 'up',
  39: 'right',
  40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});