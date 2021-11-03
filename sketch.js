var caixa; 

function setup() {
  createCanvas(400,400);
   caixa = createSprite(200,200,30,30);
}



function draw() 
{
  background(30);
 
if(keyIsDonw(UP_ARROW)){
  caixa.position.y=caixa.position.y-5
}
if(keyIsDonw(DONW_ARROW)){
  caixa.position.y=caixa.position.y+5
}
if(keyIsDonw(RIGHT_ARROW)){
  caixa.position.x=caixa.position.x+5
}
if(keyIsDonw(LEFT_ARROW)){
  caixa.position.x=caixa.position.x-5
}
  drawSprites();
}




