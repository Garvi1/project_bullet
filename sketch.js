var bullet ,wall,wall2,wall3,bullet2,bullet3;
var speed,speed2,speed3,weight;
function setup() {
createCanvas(1600,600);


speed = random(5,10);
weight = random(400,1500);
speed2 = random(2,20);
speed3 = random(3,25);


wall = createSprite(870,300,50,600);
wall.shapeColor = 0;

wall2 = createSprite(200,200,1290,50);
wall2.shapeColor = 0

wall3 = createSprite(200,400,1290,50);
wall3.shapeColor = 0

bullet = createSprite(50,100,130,50);
bullet.velocityX = speed;
bullet.shapeColor = 0;


bullet2 = createSprite(50,280,130,50);
bullet2.velocityX = speed2;
bullet2.shapeColor = "orange"

bullet3 = createSprite(50,490,130,50);
bullet3.velocityX = speed3;
bullet3.shapeColor = "lightblue";

}


function draw() {

  background("red");


 isTouching(wall,bullet,speed);
 isTouching(wall,bullet2,speed2);
 isTouching(wall,bullet3,speed3);

  drawSprites();
}

function isTouching(w,b,s) {
if(w.x - b.x < b.width/2 + w.width/2) {
  b.velocityX = 0 ;
  var deformation = 0.5*weight*s*s/500;
  
  if(deformation < 70) {
    b.shapeColor = "green";

  }

  if(deformation >70 && deformation < 100) {
    b.shapeColor = "yellow"
  }

  if(deformation > 100) {
    b.shapeColor = "blue"
   }
  }
 }


