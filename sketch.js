var hr, mn, sc;
var hra, mna, sca;
function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200, 200);  
  rotate(-90);
hr = hour();
mn = minute();
sc = second();
sca = map(sc, 0, 60, 0, 360);
mna = map(mn, 0, 60, 0, 360);
hra = map(hr%12, 0, 12, 0, 360);
push();
rotate(sca);
stroke("green");
strokeWeight(7);
line(0, 0, 100, 0);
pop();
push();
rotate(mna);
stroke("red");
strokeWeight(7);
line(0, 0, 75, 0);
pop();
push();
rotate(hra);
stroke("yellow");
strokeWeight(7);
line(0, 0, 50, 0);
pop();
stroke("blue");
point(0, 0);
strokeWeight(10);
arc(0, 0, 300, 300, 0, sca);
stroke("pink");
arc(0, 0, 280, 280, 0, mna);
stroke("white");
arc(0, 0, 260, 260, 0, hra);

  drawSprites();
}
