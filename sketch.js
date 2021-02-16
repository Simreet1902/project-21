var bullet, speed;
var weight, thickness, wall;

function setup (){

    createCanvas(1600,400);

    thickness  = random(22,83);
    speed = random(223,321);
    weight = random(30,52);

    bullet = createSprite(0, 200,80,5);
    bullet.shapeColor = color(255, 255, 255);
    bullet.velocityX = speed;

    wall  = createSprite(1200,200,thickness, height/2);
    wall.shapeColor = color(80,80,80);

}

function draw(){
    background(color(0,0,0));

    if(hasCollided(bullet,wall)){
        bullet.velocityX = 0;
        var damage = 0.5 * speed * speed * weight/ (thickness* thickness * thickness)

    if(damage> 10){
        bullet.shapeColor = color(255,0,0);
    }
    else{bullet.shapeColor = color(0,255,0)}
    }

    drawSprites();
}


function hasCollided(lbullet, lwall){
    bulletRightEdge = lbullet.x + lbullet.width;
    wallLeftEdge =  lwall.x;
    if(bulletRightEdge >= wallLeftEdge){
    return true;
    }
    else{return false}
}