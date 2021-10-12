// console.log(document.getElementsByClassName("options"));
// console.log(document.getElementsByClassName("options")[0].innerHTML);

const images = ["burger.jpg", "ramen.jpg", "paella.jpg"];
const title = ["burger", "ramen", "paella"];

for(i=0; i<document.getElementsByClassName('options').length; i++){
  document.getElementsByClassName('label')[i].innerHTML = title[i];
  console.log(document.getElementsByClassName("options")[i].innerHTML);
  document.getElementsByClassName("options")[i].innerHTML += '<img src="assets/'+ images[i] +'">';
  document.getElementsByClassName("options")[i].setAttribute("id", title[i]);
  document.getElementsByClassName("options")[i].addEventListener("click", function(){changeColor(this.id)})
}

function changeColor(sectionID){
  console.log(sectionID);
  document.getElementById(sectionID).classList.toggle("blue");
}
