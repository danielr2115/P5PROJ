//Professor Loveless - MMP 100 - Demo 11/26/19 - Advanced

var diameter = 70; //declaring and initializing our variable
var beginning = 100;
var space = 70;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(8, 255, 65);

  //small white ellipse that follows my mouse's position
  fill(255);
  ellipse(mouseX, mouseY, 5, 5);
  //A few system variables:
  //mouseX - gives us the value of the X coordinate of our mouse
  //mouseY - gives us the value of the Y coordinate of our mouse

  if (mouseIsPressed) {
    diameter = 100; //if the mouseIsPressed, diameter = 100
    fill(random(0, 255), random(0, 255), random(0, 255)); //fill is a random color
  } else {
    diameter = 50; //else the diameter = 50
    fill(255); //fill is white
      // else grow by 10px
      diameter = diameter + 20;

  }

  //expressions - Computer's can do math! - (+, -, *, / )
  ellipse(beginning + (space * 0), 250, diameter, diameter);
  ellipse(beginning + (space * 1), 250, diameter, diameter);
  ellipse(beginning + (space * 2), 250, diameter, diameter);

  ellipse(0, 250, 150, diameter);
  ellipse(120, 250, diameter, diameter);
  ellipse(100, 250, diameter, diameter);
  ellipse(70, 250, diameter, diameter);
    ellipse(50, 250, mouseX, mouseY);
      ellipse(20, 200, mouseX, mouseY);
        ellipse(50, 100, mouseX, mouseY);
          rect(20, 100, mouseX, mouseY);
            rect(20, 10, mouseX, mouseY);

}
