//The setup function only happens once
function setup() {
  createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
 background("white");
 fill("lightgrey")

 //tail
 triangle(280,280,350,150,390,170);

 //leftbackpaws
 ellipse(190,280,40,30);

 //leftfrontleg
 line(180,180,160,290);

 //body
 ellipse(230,210,130,150);

 //rightfrontleg
 line(230,190,195,300);

 //leftfrontpaw
 ellipse(145,290,30,20);










