var fixedRec, movingRec;



function setup() {
  createCanvas(800,400);

fixedRec = createSprite(600,200,90,20);
fixedRec.shapeColor="red";
movingRec = createSprite(800,300,50,80);
movingRec.shapeColor= "red";

fixedRec.debug = true;
movingRec.debug= true;


}

function draw() {
  background("black");  
movingRec.x = World.mouseX;
movingRec.y = World.mouseY;

if (movingRec.x - fixedRec.x < fixedRec.width/2 + movingRec.width/2
  && fixedRec.x - movingRec.x < fixedRec.width/2 + movingRec.width/2
  && movingRec.y - fixedRec.y < fixedRec.height/2 + movingRec.height/2
  && fixedRec.y - movingRec.y < fixedRec.height/2 + movingRec.height/2){
    movingRec.shapeColor = "green";
    fixedRec.shapeColor = "green";
  }
  else
  {
fixedRec.shapeColor = "blue";
movingRec.shapeColor = "blue";
  }

  drawSprites();
}