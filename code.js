var trex, trexAnimation;
var ground;
function setup() {
  createCanvas(400, 400);
  trex = createSprite(50, 300);
  trex.addAnimation("trex_moving", trexAnimation);
  trex.scale = 0.5;

  ground = createSprite(200, 350, 800, 20);
  ground.velocityX = -2;
}
function draw() {
  background("lightblue");

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  drawSprites();
}

function preload() {
  trexAnimation = loadAnimation("trex1.png", "trex3.png", "trex4.png");
}
