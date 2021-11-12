// switch between css themes
// code modified from https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/
// Select the stylesheet <link>
const theme = document.querySelector("#theme-link");
// get button
const btn = document.getElementById("themeButton");
// get list items
const lItems = document.getElementsByClassName("listItem");
const dlItems = document.getElementsByClassName("darkListItem");

// Listen for a click on the dark/light mode button
btn.addEventListener("click", function() {
  const iconSwap = document.getElementById("changeIcon");
  // If the current URL contains "light-theme.css"
  if (theme.getAttribute("href") == "light_theme.css") {
    theme.href = "dark_theme.css";
    btn.className = "lightMode";
    for(i=0;i<lItems.length;i++){
      lItems[0].className = "darkListItem";
    }
    let newIcon = iconSwap.src.replace("lightWeatherIcons", "darkWeatherIcons");
    iconSwap.src = newIcon;
  } else {
    theme.href = "light_theme.css";
    btn.className = "darkMode";
    for(i=0;i<dlItems.length;i++){
      dlItems[0].className = "listItem";
    }
    let newIcon = iconSwap.src.replace("darkWeatherIcons", "lightWeatherIcons");
    iconSwap.src = newIcon;
  }
});

// pull weather data from OpenWeatherMap API and insert the values into the weather widget
function weather(){
  //get the user's geolocation using geolocation API
  //geolocation code from MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
  };

  function success(pos) {
    var crd = pos.coords;
    let latitude = crd.latitude;
    let longitude = crd.longitude;
    // get weather based on user's lat/lon
    getWeather(latitude,longitude);
  }

  function error(err) {
    //note: `` creates a template literal. can use the ${} form of embedding code in strings this way
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  //weather API AJAX call
  function getWeather(lat,lon){
    const apiKey = "ca43d7e77aea23aaed476c34dbc2f17d";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
    // ajax fetch request
    fetch(url)
     .then(response => response.json())
     .then(data => {
       // do stuff with the data - get data needed and input into html
       document.getElementById("temp").innerHTML = Math.round(data.main.temp);
       document.getElementById("humidity").innerHTML = data.main.humidity;
       document.getElementById("wind").innerHTML = data.wind.speed;
       document.getElementById("wthr").innerHTML = data.weather[0].description;
       // choose icon set to use based on which stylesheet is active
       // all icons by P Thanga Vignesh from the Noun Project
       console.log(theme.getAttribute("href"));
       const themeStyle = theme.getAttribute("href");

       let icon = "";
       if (themeStyle == "light_theme.css")
        icon = `assets/lightWeatherIcons/${data.weather[0]["icon"]}.svg`;
       if (themeStyle == "dark_theme.css")
        icon = `assets/darkWeatherIcons/${data.weather[0]["icon"]}.svg`;
       document.getElementById("weatherIcon").innerHTML = `<img src=${icon} alt=${data.weather[0]["main"]} id="changeIcon"></img>`;
     })
     .catch(() => {
       // on error, print msg to console
       console.log("ajax error");
     });
  }
  // run geolocation
  navigator.geolocation.getCurrentPosition(success, error, options);
}

// run weather function every 30 seconds after initial run, default to fahrenheit
weather();
setInterval(weather, 30000);

// generate random self care task on reload
const selfCare = ["game", "write", "nap", "cook", "eat", "read"];
const random = Math.floor(Math.random() * selfCare.length);
document.getElementById("scItems").innerHTML = selfCare[random];

//pull date data
const mName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();
let dayOfWeek = d.getDay();
let day = d.getDate();
if (day<10)
  day = "0"+day;
let month = mName[d.getMonth()];
let year = d.getFullYear();
let currentDate = day+" "+month+" "+year;

// Swap in current day of week for header
// document.getElementById("day").innerHTML = dName[dayOfWeek];
// Swap in current date
document.getElementById("date").innerHTML = currentDate;

// reminder arrays
const rSun = ["take walk","shower","meal prep"];
const rMon = ["take walk","do dishes","clean up"];
const rTues = ["trash run","shower","clean floors"];
const rWed = ["take walk","do dishes","clean room"];
const rThur = ["clean kitchen","shower","clean up"];
const rFri = ["trash run","do dishes","clean floors"];
const rSat = ["take walk","shower","laundry"];
const rWeek = [rSun, rMon, rTues, rWed, rThur, rFri, rSat];

// class arrays
const cSun = ["No class today!"];
const cMon = ["4:10PM - IMAGE"];
const cTues = ["9:35AM - WEB", "11:10AM - MIT", "3:55PM - IMAGE"];
const cWed = ["4:10PM - TEXT"];
const cThur = ["3:55PM - WEB"];
const cFri = ["3:30PM - TEXT"];
const cSat = ["No class today!"];
const cWeek = [cSun, cMon, cTues, cWed, cThur, cFri, cSat];

// set the array for current day
let rToday = rWeek[dayOfWeek];
let cToday = cWeek[dayOfWeek];

// set reminders on page to correct lines for the day of week
for(i=0; i<3; i++){
  document.getElementById("check"+(i+1)).innerHTML = rToday[i];
}

// procedurally generate the class Schedule
for(i=0; i<cToday.length; i++){
  document.getElementById("sList").innerHTML += '<li class="listItem">'+cToday[i]+'</li>';
}
