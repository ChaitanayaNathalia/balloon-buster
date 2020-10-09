var backgroundImage, bowImage, redballoonImage, blueballoonImage, greenballoonImage, pinkballoonImage, arrowImage;
var score  = 0;

function preload() {
  backgroundImage = loadImage("background0.png");
  bowImage = loadImage("bow0.png");
  redballoonImage = loadImage("red_balloon0.png");
  blueballoonImage = loadImage("blue_balloon0.png");
  greenballoonImage = loadImage("green_balloon0.png");
  pinkballoonImage = loadImage("pink_balloon0.png");
  arrowImage = loadImage("arrow0.png");
}

function setup() {
  createCanvas(600, 600);

  background = createSprite(0, 0, 600, 600);
  background.addImage(backgroundImage);
  background.scale = 2.5;
  
  bow = createSprite(500, 200, 11, 11);
  bow.addImage(bowImage);
}

function draw() {
  background.velocityX = -3;
  if (background.x < 80) {
    background.x = 300

  }
    bow.y = World.mouseY;
    if (keyDown("space")) {
        arrow = createSprite(500, 200, 1, 1);
        arrow.addImage(arrowImage);
        arrow.y = bow.y;
        arrow.velocityY = 0;
        arrow.velocityX = -5;
        arrow.scale = 0.3
    }
  var rand = Math.round(random(1, 4));
  if (frameCount%80 == 0) {
    if (rand == 1) {
      redBalloon();
    }
    else if (rand ==2) {
      greenBalloon();
    }
    else if (rand == 3) {
      blueBalloon();
    }
    else if (rand == 4) {
      pinkBalloon();
    }
  }
  drawSprites();
  text("Score: "+ score, 200, 30);
}
function redBalloon() {
  redb = createSprite(0, 38, 1, 1);
  redb.addImage(redballoonImage);
  redb.velocityY = 0;
  redb.velocityX = 5;
  redb.lifetime = 200;
  redb.scale = 0.1;
  redb.y = Math.round(random(10, 390));
}
function greenBalloon() {
  greenb = createSprite(0, 38, 1, 1);
  greenb.addImage(greenballoonImage);
  greenb.velocityY = 0;
  greenb.velocityX = 5;
  greenb.lifetime = 200;
  greenb.scale = 0.1;
  greenb.y = Math.round(random(10, 390));
}
function blueBalloon() {
  blueb = createSprite(0, 38, 1, 1);
  blueb.addImage(blueballoonImage);
  blueb.velocityY = 0;
  blueb.velocityX = 5;
  blueb.lifetime = 200;
  blueb.scale = 0.1;
  blueb.y = Math.round(random(10, 390));
}
function pinkBalloon() {
  pinkb = createSprite(0, 38, 1, 1);
  pinkb.addImage(pinkballoonImage);
  pinkb.velocityY = 0;
  pinkb.velocityX = 5;
  pinkb.lifetime = 200;
  pinkb.scale = 1;
  pinkb.y = Math.round(random(10, 390));
}