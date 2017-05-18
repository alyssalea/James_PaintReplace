var counter = 0; 
function preload() {
  sound = loadSound('assets/musicycool.mp3');
}
function setup() {
  createCanvas(windowWidth,windowHeight)
  background (0,0,0);
     sound.setVolume(0.1);
  sound.play();
}

function draw() {

 fill (random (20,255),random (0,250),random (0,250))
 rect (mouseX, mouseY, mouseY, mouseX)
 rect (mouseY, mouseX, mouseX, mouseY)
 rect (mouseX, mouseY, mouseX, mouseY)
 rect (mouseY, mouseX, mouseY, mouseX)
}