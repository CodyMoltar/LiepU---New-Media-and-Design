let userHasClicked = false;

let riverSound;
let metalSound;

let circleX = 200;
let circleY = 300;



function preload() {
  riverSound = loadSound('assets/river.wav');
  metalSound = loadSound('assets/metal.wav')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(30)
  textAlign(CENTER)

  riverSound.setVolume(0)
  metalSound.setVolume(0.5)

}

function draw() {
  let metalColor = color('red');
  let riverColor = color('green');

  background('hotpink');

  if(userHasClicked == false){
    text(
      'hi, click to continue, or something, idk...',
      width/2,
      height/2  
    )
  } else {

    if(riverSound.isPlaying() == false){
      riverSound.play();
    }

    if(metalSound.isPlaying() == false){
      metalSound.play();
    }

    let targetVolumeRiver = map(
      mouseX,
      0,
      width,
      0,
      1
    )
    riverSound.setVolume(0)

    let targetVolumeMetal = map(
      mouseX,
      0,
      width,
      1,
      0
    )
    metalSound.setVolume(0)

    let targetColor = lerpColor(riverColor, metalColor, targetVolumeRiver)
    background(targetColor)

    let distanceToMouse = dist(mouseX, mouseY, circleX, circleY);
    let newVolume = map(distanceToMouse, 0, 150, 1, 0)
    newVolume = constrain(newVolume, 0 , 1);

    // circle(circleX, circleY, 50)

    riverSound.setVolume(newVolume)

  }
  
  

  

}

function mouseClicked(){
  userHasClicked = true;
}
