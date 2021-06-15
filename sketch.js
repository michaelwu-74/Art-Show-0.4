//List of Variables
var player
var backGround
var level
var startScreen
var trash
var skyBorder
var tick = 0
var tick2 = 0
var second1 = 1
var minute1 = 0
var orbsCollected = 0
var secondsLeft = 60
var ocram
var orb
var trash1
var orbTick = 0
var ocramLeft
var ocramRight
var ocramTick = 0
let orbCollect

function preload() {
 //soundFormats('mp3', 'ogg');
 // soundTrack = loadSound('yoshi.mp3');
 //orbCollect = loadSound('orbsCollect.mp3')

}


//Setup
function setup(){
  createCanvas(800,500);
  level = 1
//Screen on level 1-----------------------------------------
 startScreen = createSprite(width/2,height/2,10,100)
 startScreen.addAnimation("startScreen","StartScreen.png")
 startScreen.scale = 0.6
//Background of the game------------------------------------
  backGround = createSprite(width/2,height/2,10,100)
  backGround.scale = 1
  backGround.addAnimation("backGround","Background.png")
//The player code-------------------------------------------
  player = createSprite(70,440,10,10)
  player.setCollider('rectangle', 0, -3, 50, 100)
  player.scale = 0.3
//Naming the animations for the Player
  player.addAnimation("playerMoving","player1.png","player8.png")
  player.addAnimation("idle","player1.png")
  player.changeAnimation('idle')
//The invisible wall that keeps the player in the play zone--------------------------------------------------------
  skyBorder = createSprite(100,372,3000,10)
  skyBorder.setCollider('rectangle',0,0,3000,10)
//The boss--------------------------------------------------
  ocram = createSprite(width/2,100,100,100)
  ocram.addAnimation("ocramIdle","Ocram1.gif")
  ocram.scale = 0.5

//The orbs you collect to win-------------------------------
  orb = createSprite(width/2,500,100,100)
  orb.addAnimation("Orb","Orb.gif")
  orb.scale = 1
//The trash that falls on you-------------------------------
  trash1 = createSprite(ocram.y,ocram.x,100,100)
  trash1.addAnimation("Trash1","trash1.png")
  trash1.scale = 1
  trash1.setCollider('rectangle', 0, 0, 60, 60)
  trash1.visible = false
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
}

function draw(){
  background(255,255,255);  
  skyBorder.visible = false;
//----------------------------------------------------------
  player.debug = mouseIsPressed;
  skyBorder.debug = mouseIsPressed;
  trash1.debug = mouseIsPressed;
  player.collide(skyBorder)
//----------------------------------------------------------
// Key 13 is the Enter key.
   if (keyIsDown(13)) {
    level = 2
  }
  //----------------------------------------------------------
  //Level 1 (The start screen)
 if (level === 1) {
    background("black")
    fill("white")
    text("Press [Enter] to start!", width/2 - 60, 100)
    player.visible = false
    backGround.visible = false
    ocram.visible = false
    orb.visible = false
    trash1.visible = false
  //Level 2 The main course of the game
  } else if (level === 2) {
    clear()
    tick = tick + 1
    tick2 = tick2 + 1
    ocramTick = ocramTick + 1
    orbTick = orbTick + 1
    player.visible = true
    backGround.visible = true
    ocram.visible = true
  //Level 3 the loss screen
  } else if (level === 3) {
    clear()
    fill(0, 0, 0)
    textSize(100);
    fill("white")
    text("Boo, You Lost!", width/2 - 60, 100)
    player.visible = false
    backGround.visible = false
    ocram.visible = false
    orb.visible = false
    trash1.visible = false
    startScreen.visible = false
  //Level 4 the win screen
  } else if (level === 4){
    clear()
    fill(0, 0, 0)
    textSize(100);
    fill("white")
    text("Yay, You Won!", width/2 - 60, 100)
    player.visible = false
    backGround.visible = false
    ocram.visible = false
    orb.visible = false
    trash1.visible = false
    startScreen.visible = false
  }
//----------------------------------------------------------
   drawSprites();
//Player movement
  player.velocity.x = 0;
  player.velocity.y = 0;
   if (keyIsDown(LEFT_ARROW)) {
    player.changeAnimation('playerMoving')
    player.velocity.x = -5;
    player.mirrorX(-1);
  }
  else {
    player.changeAnimation('idle')
    player.mirrorY(1)
  }
  if (keyIsDown(RIGHT_ARROW)) {
    player.mirrorX(1);
    player.changeAnimation('playerMoving')
    player.velocity.x = 5;
  }
  else {
    player.mirrorY(1)
  }
  if (keyIsDown(DOWN_ARROW)) {
    player.velocity.y = 5;
    player.changeAnimation('playerMoving')
  }
  if (keyIsDown(UP_ARROW)) {
    player.velocity.y = -5;
    player.changeAnimation('playerMoving')  
  }
//----------------------------------------------------------
  //Borders
  fill(0, 0, 0)
  border1 = rect(1, 1, 798, 10)
  border2 = rect(1, 1, 10, 623)
  border3 = rect(1, 614, 798, 10)
  border4 = rect(789, 1, 10, 623)
  //for all sprites (so that they cant leave the premise)
  for (var i = 0; i < allSprites.length; i++) {

    var s = allSprites[i];
    if (s.position.x < 0) {
      s.position.x = 1;
      s.velocity.x = abs(s.velocity.x);
    }
    if (s.position.x < 0) {
      s.position.x = 1;
      s.velocity.x = abs(s.velocity.x);
    }

    if (s.position.x > width) {
      s.position.x = width - 1;
      s.velocity.x = -abs(s.velocity.x);
    }

    if (s.position.y < 0) {
      s.position.y = 1;
      s.velocity.y = abs(s.velocity.y);
    }

    if (s.position.y > height) {
      s.position.y = height - 1;
      s.velocity.y = -abs(s.velocity.y);
    }
  }
  // This is the win screen, so that when you collect 5 orbs, it will bring you to it.
  if (orbsCollected === 5){
    level = 4
  }

//Timers'n'stuff
  if (tick === 70) {
    secondsLeft = secondsLeft - second1
    tick = 0
  }

  if (secondsLeft === 0) {
    level = 3

  }


  if (orbTick === 700) {
    orb.position.x = random(10,790)
    orb.position.y = random(400,500)
    orb.visible = true
  }

  if (orbTick === 1050) {
    orb.visible = false
    orb.position.x = 1
    orb.position.y = 1
    orbTick = 350
  }

// the code that makes ocram start to move
  if (tick2 === 1) {
    ocram.velocity.x = 5;
  }

//Orb collection code
 if (orb.collide(player)) {
    //orbCollect.play();
    orb.visible = false
    orb.position.x = 1
    orb.position.y = 1
    orbsCollected = orbsCollected + 1
  }
 
  //-------------------------------------------------------


  if (ocramTick === 80) {
    trash1.draw()
    trash1.scale = 1
    trash1.visible = false
    trash1.position.x = ocram.position.x
    trash1.position.y = ocram.position.y
    trash1.visible = true
    trash1.velocity.y = 5;
    ocramTick = 0
  }

//Stats (Top left corner info)
  fill(255,255,255)
  rect(0,0,150,55)
    fill(0, 0, 0)
    textSize(15);
    text(orbsCollected + " Orbs Collected", 23, 40);
    textSize(15);
    text("Time left: " + secondsLeft,23,20);









} 
