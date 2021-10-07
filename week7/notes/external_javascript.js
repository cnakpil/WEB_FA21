const quotes = ["Toddlers scream when distressed. Adults should too.",
"Sometimes, the things you think matter most in life aren't more important than food.",
"Eat the rich"];
quoteCount = 0;
document.getElementById('qbutton').addEventListener("click", newQuote);
function newQuote(){
  document.getElementById("qtext").innerHTML = quotes[quoteCount];
  // alert("clicked");
  if(quoteCount>=(quotes.length-1)){
    quoteCount = 0;
  }else{
    quoteCount ++;
  }
}
