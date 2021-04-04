
var fixedRect,movingRect;
var O1,O2;
var game;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  game = createSprite(200,100,50,50);
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(isTouching(game,movingRect)){
  game.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{
    game.shapeColor="green";
  movingRect.shapeColor="green";
  }
  drawSprites();
}

