var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudImage;
var ob1,ob2,ob3,ob4,ob5,ob6


var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");

  ob1 =loadImage("obstacle1.png");
  ob2 =loadImage("obstacle2.png");
  ob3 =loadImage("obstacle3.png");
  ob4 =loadImage("obstacle4.png");
  ob5 =loadImage("obstacle5.png");
  ob6 =loadImage("obstacle6.png");

}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  
}

function draw() {
  background(180);
  
  //console.log(trex.y)
  
  if(keyDown("space") && trex.y>=161.5) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  spawnCactus()
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;

    cloud.lifetime = 210;

    /*
      distance = speed * time
      600 = 3 * time
      time = 600/3 = 200
    */
  }
}
function spawnCactus(){

//Add a random framcount
if(frameCount % 90===0){
  var cactus=createSprite(610,160,6,6)
  cactus.velocityX=-4
  var randomNumber=Math.round(random(1,6))
  console.log(randomNumber)

  //SWITCH statement
  switch(randomNumber){
    case 1:cactus.addImage(ob1)
          break
    case 2:cactus.addImage(ob2)
          break
    case 3:cactus.addImage(ob3)
          break
    case 4:cactus.addImage(ob4)
          break
    case 5:cactus.addImage(ob5)
          break
    case 6:cactus.addImage(ob6)
          break
    
  }
  
  cactus.scale = 0.5

}

}

/*
SWITCH - conditional statement used when the condition is depended upon the value of an expression
  conditions --> cases
  break - to get out of the current {}
  case names are decided by the value of the expression

  switch(expression){
    case 'a': //statement
      break;
    case 4: //statement
      break;
    case 'Ara': //statement
      break;
    default: //statement
      break;
  }

*/


  