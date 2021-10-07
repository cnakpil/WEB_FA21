document.getElementById("androids").addEventListener("click", androids);
document.getElementById("humans").addEventListener("click", humans);
document.getElementById("restart").addEventListener("click", restart);

function restart(){
  document.getElementById("line1").innerHTML = 'what do <a id="androids">androids</a>/<a id="humans">humans</a> dream?';
  document.getElementById("line2").innerHTML = "";
  document.getElementById("line3").innerHTML = "";
  document.getElementById("restart").innerHTML = "";
  document.getElementById("androids").addEventListener("click", androids);
  document.getElementById("humans").addEventListener("click", humans);
  document.getElementById("restart").addEventListener("click", restart);
  document.body.style.backgroundImage = 'none';
}
function androids(){
  document.getElementById("line1").innerHTML = "what do androids dream?";
  document.getElementById("line2").innerHTML = 'moments of life <a id="bytes">stored in bytes</a>/<a id="time">lost to time</a>';
  document.getElementById("bytes").addEventListener("click", bytes);
  document.getElementById("time").addEventListener("click", time);
}
function bytes(){
  document.getElementById("line2").innerHTML = "moments of life stored in bytes";
  document.getElementById("line3").innerHTML = "immortality";
  document.getElementById("restart").innerHTML = "restart";
  document.body.style.backgroundImage = "url('./assets/AI.png')";
}
function time(){
  document.getElementById("line2").innerHTML = "moments of life lost to time";
  document.getElementById("line3").innerHTML = "gone like tears in rain";
  document.getElementById("restart").innerHTML = "restart";
  document.body.style.backgroundImage = "url('./assets/bladerunner.png')";
}
function humans(){
  document.getElementById("line1").innerHTML = "what do humans dream?";
  document.getElementById("line2").innerHTML = 'of <a id="flares">solar flares</a>/<a id="fires">wildfires</a> burning bright';
  document.getElementById("flares").addEventListener("click", flares);
  document.getElementById("fires").addEventListener("click", fires);
}
function flares(){
  document.getElementById("line2").innerHTML = "of solar flares burning bright";
  document.getElementById("line3").innerHTML = "tiny galaxies";
  document.getElementById("restart").innerHTML = "restart";
  document.body.style.backgroundImage = "url('./assets/galaxies.png')";
}
function fires(){
  document.getElementById("line2").innerHTML = "of wildfires burning bright";
  document.getElementById("line3").innerHTML = "scorched from dragon's breath";
  document.getElementById("restart").innerHTML = "restart";
  document.body.style.backgroundImage = "url('./assets/dragon.png')";
}
