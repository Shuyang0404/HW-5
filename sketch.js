var x=30;
var y=0;
var ballYSpeed=2;
var ballXSpeed=1;

var x1=30;
var y1=0;
var ballYSpeed1=1.98;
var ballXSpeed1=0.98;

var x2=30;
var y2=0;
var ballYSpeed2=1.96;
var ballXSpeed2=0.96;


var x3=30;
var y3=0;
var ballYSpeed3=1.94;
var ballXSpeed3=0.94;



function setup() {
  createCanvas(400, 400);
}
function preload(){
  soundFormats("mp3");
  mySound=loadSound("2a.wav");
  mySound1=loadSound("1a.wav");
  mySound2=loadSound("4a.wav");
  mySound3=loadSound("3a.wav");
  mySound4=loadSound("5a.wav");
  mySound5=loadSound("7a.wav");
  mySound6=loadSound("6a.wav");
}

function draw() {
  background(50, 55, 100);
  noStroke();
 
  
   let inside = color(204, 102, 0);
  let middle = color(204, 153, 0);
  let outside = color(153, 51, 0);
  
  
  fill(outside);
  arc(200, 400, 100, 100, PI, TWO_PI);
  fill(middle);
  arc(250, 400, 100, 100, PI, TWO_PI);
  fill(inside);
  arc(350, 400, 150, 150, PI, TWO_PI);
  fill(inside);
  arc(100, 400, 100, 100, PI, TWO_PI);
  fill(middle);
  arc(20, 400, 150, 150, PI, TWO_PI);
fill(middle);
  ellipse(200, 100, 100); 

fill(220);
  //head
 ellipse(x, y, 70);
  ellipse(x1, y1, 30);
  ellipse(x2, y2, 25);
  ellipse(x3, y3, 20);
  
     y=y+ballYSpeed;
  x=x+ballXSpeed;
  
   y1=y1+ballYSpeed1;
  x1=x1+ballXSpeed1;
  
   y2=y2+ballYSpeed2;
  x2=x2+ballXSpeed2;
  
   y3=y3+ballYSpeed3;
  x3=x3+ballXSpeed3;
  




 
  
if (y > 400) {
   ballYSpeed= -ballYSpeed;
  mySound.play();
}
 if (x>width){
  ballXSpeed=-ballXSpeed;
   mySound1.play();
  }

  if (y < 0) {
    ballYSpeed = -ballYSpeed;
    mySound.play();
  }
 if (x<0){
  ballXSpeed=-ballXSpeed;
   mySound1.play();
  }
  
  //2
  if (y1 > 400) {
   ballYSpeed1= -ballYSpeed1;
    mySound2.play();
    
}
 if (x1>width){
  ballXSpeed1=-ballXSpeed1;
   mySound3.play();
 
  }

  if (y1 < 0) {
    ballYSpeed1 = -ballYSpeed1;
    mySound2.play();
    
  }
 if (x1<0){
  ballXSpeed1=-ballXSpeed1;
   mySound3.play();
  
  }
  
  //3
  if (y2 > 400) {
   ballYSpeed2= -ballYSpeed2;
    mySound3.play();
    
}
 if (x2>width){
  ballXSpeed2=-ballXSpeed2;
   mySound2.play();
 
  }

  if (y2 < 0) {
    ballYSpeed2 = -ballYSpeed2;
    mySound3.play();
    
  }
 if (x2<0){
  ballXSpeed2=-ballXSpeed2;
   mySound3.play();
  
  }
  
   //4
  if (y3> 400) {
   ballYSpeed3= -ballYSpeed3;
    mySound6.play();
    
}
 if (x3>width){
  ballXSpeed3=-ballXSpeed3;
   mySound6.play();
 
  }

  if (y3 < 0) {
    ballYSpeed3 = -ballYSpeed3;
    
  }
 if (x3<0){
  ballXSpeed3=-ballXSpeed3;
  
  }
  
  if (dist(mouseX, mouseY, x, y) < 40) {
  if (mouseIsPressed){
    mySound4.play();
    x=x+ballXSpeed;
      y=y+ballYSpeed;
      x1=x;
    y1=y;
      x2=x;
      y2=y;
      x3=x;
      y3=y;
    x4=x;
      y4=y;
  }
  fill(100, 50, 150);
  arc(200, 400, 100, 100, PI, TWO_PI);
  fill(200, 50, 100);
  arc(250, 400, 100, 100, PI, TWO_PI);
  fill(200, 100, 100);
  arc(350, 400, 150, 150, PI, TWO_PI);
  fill(50, 150, 200);
  arc(100, 400, 100, 100, PI, TWO_PI);
  fill(100, 50, 200);
  arc(20, 400, 150, 150, PI, TWO_PI);
 
  fill(100, 100, 150);
  ellipse(200, 100, 100);
    
    

  }
    }
