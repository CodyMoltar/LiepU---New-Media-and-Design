let riverSound;
let metalSound;
let userHasClicked = false;


function preload() {
  riverSound = loadSound('assets/river.wav');
  metalSound = loadSound('assets/metal.wav');
}


function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER);
    riverSound.setVolume(1)
}

function draw() {
    background("hotpink");

    if(userHasClicked == false){
      text('Click to start, or something.. idk', width/2, height/2)
    }
    else{
      
      // put all the code after the user has clicked

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
      riverSound.setVolume(targetVolumeRiver)

      let targetVolumeMetal = map(
        mouseX,
        0,
        width,
        1,
        0
      )
      metalSound.setVolume(targetVolumeMetal)

    }

    
}

function mouseClicked(){
  userHasClicked = true;
}
