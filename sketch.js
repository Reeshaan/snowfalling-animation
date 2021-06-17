var snow01,snow02,snow03;
var BackgroundImg;
var snow01Img

function preload(){
snow01Img=loadImage("snow4.webp")

}
function setup() {
  createCanvas(800,400);
  

  BackgroundImg=loadImage("snow3.jpg")

}

function draw() {
  background(BackgroundImg); 
  if(frameCount%20===0){
  snow01=createSprite(random(0,800),random(0,40), 50, 50);
  snow01.addImage(snow01Img);
  snow01.scale=0.2;
  snow01.velocityY=+2.50
  }
  

  drawSprites();
}