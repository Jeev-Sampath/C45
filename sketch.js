var database;
var gameState = 0;
var playerCount = 0;

var form, player, game;
var blueRunnerImg, redRunnerImg, trackImg, waterBottleImg, potholeImg;

function preload(){
blueRunnerImg = loadImage("images/runnerblue.png");
redRunnerImg = loadImage("images/runnerred.png");
trackImg = loadImage("images/trackforgame.jpg");
waterBottleImg = loadImage("images/waterbottle.png");
potholeImg = loadImage("images/pothole.png");
}

function setup(){
createCanvas(windowWidth,windowHeight);
database = firebase.database();
game = new Game;
game.getState();
game.start();
}

function draw(){
//background("green");
if(playerCount === 2){
game.update(1);
}
if(gameState === 1){
    game.play();
}
if(gameState === 2){
    game.end();
}
}