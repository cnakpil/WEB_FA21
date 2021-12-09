let span = document.getElementsByClassName("navLink");
for (i=0; i<3; i++){
  document.addEventListener("click", span[i]);
  console.log(span[i]);
}
