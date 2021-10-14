const quotes = ["Toddlers scream when distressed. Adults should too.",
"Life is one big yeehaw and then you die",
"Sometimes, the things you think matter most in life aren't more important than food.",
"Fact: Bisexuals don’t need to pick a side, however, when they reach the age of 12, they must pick a sword. It’s an ancient ritual.",
"#not to be a lesbian but oh my fucking god. oh my god. jesus fuck #ing christ. oh my god. fucking shit jesus fuck oh my fucking jesus fucking christ. god in heaven. holy fucki ng shit",
"des <br> pa <br> sea toad",
"They call it heartbeet because your heart looks like a beet.",
"if i have a daughter im going to name her lizard and then she’ll get the nickname liz and everyone will be like “oh is it short for elizabeth?” and she will have to say “no my name is lizard”",
"bitch and bastard are GENDERED terms and thus you must use the neutral: bitchard",
"*planet explodes* *removes one earbud* what",
"my name is Cow<br>and wen its nite<br>or wen the moon<br>is shiyning brite<br>and all the men<br>haf gon to bed -<br>i stay up late<br>i lik the bred",
"don’t even pretend you didn’t learn the words famished and parched from nintendogs",
"you’re only trying to ritually sacrifice me because you think i’m hot just admit it",
"Canon: Am I joke to you? <br> Fanon: No, just a disappointment.",
"you ever have to shake your leg because there’s a rock in it?",
"salad, or as i call it, expensive leaf nonsense",
"If carp could speak they would all have French accents",
"*pronounces “hors d'oeuvres” as “horse divorce”*",
"kinda funny when english teachers say stuff like “i can tell if you didnt read the book” or “i can tell when people bs their paper” <br><br>no you cant. you can tell when people are bad at bs-ing their paper. i didnt even read the sparknotes and i barely skimmed the wikipedia and you gave me an A. you kneel before my throne unaware that it was born of lies",
"The risk I took was calculated but man, am I bad at math.",
"step 1: buy 15 identical cats<br><br>step 2: invite someone over<br><br>step 3: when they ask how many cats you have say “just one but he's really fast”",
"“you'll understand when you're older”<br><br>i am older and i understand absolutely nothing"];
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
