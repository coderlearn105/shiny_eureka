
var randomImg;
var boatImg;
var bgImg1, bgImg2;
function preload(){

  randomImg= loadImage("../assets/trex1.png");
  boatImg = loadImage("../assets/boat.png");
  bgImg1 = loadImage("../assets/bg1.jpeg");
  bgImg2 = loadImage("../assets/bg4.jpeg");
}

function setup() {
  createCanvas(1450, 750);

  var inputBox = createInput("Enter the Country Name");
  inputBox.position(600,350);

  var submitButton = createButton("Check");
  submitButton.position(650,400);
  submitButton.mousePressed(checkResults);

  
}

function draw() {
  background(bgImg2);

  drawSprites();
}

function checkResults(){
  console.log("inside check results function");
 
    if(inputBox.value ==="green"){
      alert("Thats Correct");
    }

}