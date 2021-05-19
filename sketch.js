var canvas, backgroundImage;
var car1,car2,car3,car4,cars;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var carImage1,carImage2,carImage3,carImage4,trackImage,groundImage;
var form, player, game;

function preload(){
carImage1= loadImage("car1.png");
carImage2= loadImage("car2.png");
carImage3= loadImage("car3.png");
carImage4=loadImage("car4.png");
trackImage=loadImage("track.png");
groundImage=loadImage("ground.png");

}


function setup(){
  canvas = createCanvas(displayWidth -20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
if(gameState===2){
game.end();

}
  

}
