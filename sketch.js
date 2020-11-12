
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0
var survivalTime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -5;
}


function draw() {
  background("blue")
  ground.x=ground.width/2;
  
  stroke("white");
  textSize(20); 
  fill("white");
  text("Score: "+ score,100,25);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("survival time: "+ survivalTime,100,50);
  
  if (monkey.isTouching(FoodGroup)) {
    score = score + 1;
    banana.destroy();
  }
  if (monkey.isTouching(obstacleGroup)) {
    score = 0;
    obstacle.destroy();
  }
  
  if (keyDown("space")) {
    monkey.y = monkey.y - 15;
  }
  if (monkey.y < 320) {
    monkey.y = monkey.y + 5;   
  }
  monkey.collide(ground);
  
  obstacles();
  bananas()
  drawSprites();
}

function bananas() {
  if (World.frameCount % 80==0) {
    banana = createSprite (400,Math.round(random(120,200)),10,10);
    banana.addImage(bananaImage);
    banana.velocityX = -5;
    banana.lifetime = 100;
    banana.scale = 0.1
    FoodGroup.add(banana);
  }
}

function obstacles() {
  if (World.frameCount % 300===0) {
    obstacle = createSprite (400,325,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -5;
    obstacle.lifetime = 100;
    obstacle.scale = 0.1
    obstacleGroup.add(obstacle);
  }
}





