let imgObj = new Image();

imgNames = new Array();
imgNames[0] = "./assets/AI.png";
imgNames[1] = "./assets/bladerunner.png";
imgNames[2] = "./assets/dragon.png";
imgNames[3] = "./assets/galaxies.png";

for(var i = 0; i<4; i++){
  imgObj.src = imgNames[i];
}