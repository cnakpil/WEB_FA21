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
const wSun = [rSun, rMon, rTues, rWed, rThur, rFri, rSat];

// set the array for current day
let rToday = wSun[dayOfWeek];

// set lines on page to correct lines for the day of week
for(i=0; i<3; i++){
  document.getElementById("check"+(i+1)).innerHTML = rToday[i];
}
