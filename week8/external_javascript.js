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
let month = mName[d.getMonth()];
let year = d.getFullYear();
let currentDate = day+" "+month+" "+year;

// Swap in current day of week for header
document.getElementById("day").innerHTML = dName[dayOfWeek];
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
  document.getElementById("sList").innerHTML += '<li>'+cToday[i]+'</li>';
}

//get the user's geolocation using geolocation API
// navigator.geolocation.getCurrentPosition(showPosition);
//geolocation code from MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
//I have no idea why the syntax with "``" works. breaks with regular single quotes.
geo = navigator.geolocation;
console.log(geo);

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);



// Experiments to toggle fahrenheit and celsius
// function swapClass(div1, div2, class1, class2){
//   div1.classList.toggle(class1);
//   div2.classList.toggle(class2);
//   document.getElementsByClassName("grey")[0]
//     .addEventListener("click", function(){swapClass(fahrenheit,celsius,"grey","degPick")});
// }
//
// document.getElementsByClassName("grey")[0]
//   .addEventListener("click", function(){swapClass(fahrenheit,celsius,"grey","degPick")});
