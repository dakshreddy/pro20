var car,car2,car3,car4,wall,wall2,wall3,wall4,midwall,midwall2,midwall3;

var speed,weight;


function setup() {
  createCanvas(800,400);
 car = createSprite(50, 50, 40, 20);
 car.shapeColor = 'white'
 car2 = createSprite(670, 150, 40, 20);
 car2.shapeColor = 'yellow'
 car3 = createSprite(670, 250, 40, 20);
 car3.shapeColor = 'red'
 car4 = createSprite(670, 350, 40, 20);
 car4.shapeColor = 'green'

 wall = createSprite(700,50,20,40);
 wall2 = createSprite(700,150,20,40);
 wall3 = createSprite(700,250,20,40);
 wall4 = createSprite(700,350,20,40);

 midwall = createSprite(100,100,10500,5);
 midwall2 = createSprite(100,200,10500,5);
 midwall3= createSprite(100,300,10500,5);
 

  speed = random(55,90);
  weight = random(400,1500);
}

function draw() {
  background(0,0,0); 
  car.velocityX = speed;
 

if(wall.x-car.x < (car.width+wall.width)/2){

  car.velocityX = 0;
  var deformation = 0.5*weight*speed*speed/22509;
  if(deformation>180){
    car.shapeColor = color(255,0,0);
  }
  if(deformation<180 && deformation>100){
    car.shapeColor = color(320,320,0)
  }
  if(deformation<100){
    car.shapeColor = color(0,255,0)
  }
}

  drawSprites();
}

