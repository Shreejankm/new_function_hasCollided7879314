var thickness,bullet,wall,speed,weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83)

  bullet = createSprite(50,200,40,5);
  bullet.velocityX = speed;
  bullet.shapeColor = color("white");

  wall = createSprite(1100,200,thickness,height/2);
  wall.shapeColor = color("white");
}

function draw() {
  background("black");
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor = color("red");
    }

    if(damage<10){
      wall.shapeColor = color("green")
    }
  }

     drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x+bullet.width;
  wallLeftEdge = wall.x;
  if (bulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false;
}