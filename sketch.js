var Car, Wall
var speed,weight
var deformation 

function setup() {
  createCanvas(800,400);
  Car=createSprite(90, 200, 50, 50);
  Wall=createSprite(750,200,50,300)
  speed=random(55,90)
  weight=random(400,1500)
  deformation = 0.5 * weight * speed * speed/22509
}

function draw() {
  background(0);
  
if(Car.collide(Wall)){
Car.velocityX=0
}
 Car.velocityX=speed;




if(deformation>180){
Car.shapeColor="orange"
}

if(deformation<180){
Car.shapeColor="green"  
}

if(deformation<100){
  Car.shapeColor="blue"

}

  (Wall).shapeColor=color(80,80,80)

  drawSprites();
}
