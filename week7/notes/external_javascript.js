const quotes = ["Toddlers scream when distressed. Adults should too.",
"Life is one big yeehaw and then you die",
"Sometimes, the things you think matter most in life aren't more important than food.",
"Eat the rich",
"Fact: Bisexuals don’t need to pick a side, however, when they reach the age of 12, they must pick a sword. It’s an ancient ritual.",
"#not to be a lesbian but oh my fucking god. oh my god. jesus fuck #ing christ. oh my god. fucking shit jesus fuck oh my fucking jesus fucking christ. god in heaven. holy fucki ng shit",
"des <br> pa <br> sea toad",
"They call it heartbeet because your heart looks like a beet."];
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
