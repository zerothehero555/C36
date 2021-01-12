var database;
var gameState = 0
var playerCount
var form,player,game

function setup(){
    createCanvas(500,500);
    datebase = firebase.database()
    game = new Game()
    game.getState()
    game.start()
}

function draw(){
    background("white");
}

