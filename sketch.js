var fixedRect,movingRect;
var O1,O2
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(200, 400, 80, 30);
  fixedRect.velocityY = 4;
  movingRect.velocityY = -4;
}

function draw() {
  background(255,255,255);  
 bounceOff(fixedRect,movingRect);

  drawSprites();
}

