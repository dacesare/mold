let r = 0;
let g = 0;
let b = 50;
let limit = 0; //true or false variable


//creates initial background.
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  
  noStroke();
  fill(random(100,200), random(100,200),random(100,200));
  
  
  quad(random(windowWidth), random(windowHeight), random(windowWidth), random(windowHeight),random(windowWidth),random(windowHeight),random(windowWidth),random(windowHeight));
  
    noStroke();
  fill(random(100,200), random(100,200),random(100,200));
  
    quad(random(windowWidth), random(windowHeight), random(windowWidth), random(windowHeight),random(windowWidth),random(windowHeight),random(windowWidth),random(windowHeight));
  
    noStroke();
  fill(random(100,200), random(100,200),random(100,200));
  
    quad(random(windowWidth), random(windowHeight), random(windowWidth), random(windowHeight),random(windowWidth),random(windowHeight),random(windowWidth),random(windowHeight));
  
      noStroke();
  fill(random(100,200), random(100,200),random(100,200));
  
    quad(random(windowWidth), random(windowHeight), random(windowWidth), random(windowHeight),random(windowWidth),random(windowHeight),random(windowWidth),random(windowHeight));
  
      noStroke();
  fill(random(100,200), random(100,200),random(100,200));
  
    quad(random(windowWidth), random(windowHeight), random(windowWidth), random(windowHeight),random(windowWidth),random(windowHeight),random(windowWidth),random(windowHeight));
  
  
}

function draw() {

  noStroke();
  //randomly creates black circles across the canvas
  fill(0, 0, 0, random(10,100) );
  circle(random(width), random(height), random(10,70) );
  
fill(0, 0, 0, random(10,100) );
  circle(random(width), random(height), random(10,70) );
  
  //drawing strokes will alternate between blue and black
  
  //when limit is false, blue value will increase
  if (limit === 0) {
  b = b + 1;
  }
  //when limit is true, blue value will decrease
  if (limit === 1) {
  b = b - 1;
  }
  //sets limit as false when the value of blue reaches certain amount
  if (b <= 0) {
    limit = 0;
  }
  //sets limit as true when the value of blue reaches a certain amount
  if (b >= 150) {
    limit = 1;
  }
  //enables drawing when pressed.
  if (mouseIsPressed === true) {
  fill(r, g, b, 156);
   circle(mouseX, mouseY, 20);
  }
  

  

  
  
}