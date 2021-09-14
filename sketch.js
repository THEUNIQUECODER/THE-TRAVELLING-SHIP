
function preload(){
sea1 = loadImage("sea.png");
ship1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");


}

function setup(){
  createCanvas(1000,500);
  var sea = createSprite(500,250,1000,1000);
  sea.velocityX = -2
  sea.addImage(sea1);
  sea.scale = 0.42;
   var ship= createSprite(200,300);;
   ship.addAnimation("running",ship1) 
   ship.scale = 0.4;
  
  
  

}

function draw() {
  background("blue");
  


   
  

  drawSprites();
}