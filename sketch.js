var bg , spacecraft1,spacecraft1_Image;
var iss,iss_Image;
var rk,uk,lk;
var space123;
var space222;
var  b;
var spacecraft2;
var jjjj;
function preload(){
  bg = loadImage("spacebg.jpg");
  spacecraft1_Image = loadAnimation("spacecraft1.png");
  space123 = loadAnimation("spacecraft1.png");
  space222 = loadAnimation("spacecraft1.png");
  iss_Image = loadImage("iss.png");
  rk = loadAnimation("spacecraft3.png");
  lk = loadAnimation("spacecraft4.png");
  uk = loadAnimation("spacecraft2.png");
  jjjj = loadImage("spacecraft1.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  spacecraft1 = createSprite(700, 750, 50, 50);
  spacecraft1.addAnimation("space" ,spacecraft1_Image);
  spacecraft1.scale = 0.3;

  c = createSprite(442,515);
  c.visible = false;

  iss = createSprite(550,400,80,80);
  iss.addImage(iss_Image);
  iss.scale = 1.5;

  b = createSprite(450 ,455,20,20);
  b.visible = false;
}

function draw() {
  background(bg);  
  spacecraft1.setCollider("rectangle",0,0-197,spacecraft1.width-100,spacecraft1.height-170);
  spacecraft1.debug = false;
  if(keyDown(RIGHT_ARROW)){
  spacecraft1.addAnimation("space" ,rk);
  spacecraft1.x = spacecraft1.x+5;
  }else {
    spacecraft1.addAnimation("space" ,space222);
  }

  if(keyDown(LEFT_ARROW)){
    spacecraft1.addAnimation("space" ,lk);
    spacecraft1.x = spacecraft1.x-5;
    }else {
      spacecraft1.changeAnimation("space" , space123);
    }
 if(keyDown("up")){
  spacecraft1.addAnimation("space" ,uk);
  spacecraft1.y = spacecraft1.y-5;
 }else {
  spacecraft1.changeAnimation("space" , space123);
}
  
if(spacecraft1.isTouching(b)){
  spacecraft1.visible = false;
  b.visible = false;
 
  c.visible = true;
  c.addAnimation("space" ,spacecraft1_Image);
  c.scale = 0.3;
 
}
if(c.isTouching(b)){
  fill("red");
  textSize(30);
  text("YAY!! MISSION SUCESSFULLY DONE" ,1000,300);
}

  drawSprites();
}

/*end(){
  fill("black");
  textSize(30);
  text("MISSION SUCESSFULLY DONE" ,500,300);
}*/
