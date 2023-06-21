const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2024, 4, 24, 11, 30, 0);
const year = futureDate.getFullYear();
const hrs = futureDate.getHours();
const min = futureDate.getMinutes();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const day = weekdays[futureDate.getDay()];

giveaway.textContent = `Give away ends ${day}, ${hrs} ${min}am, ${date} ${month} ${year}`;

// future time in ms
const futureTime = futureDate.getTime();

const getRemainingTime = function () {
  // current time in ms
  const today = new Date().getTime();

  const t = futureTime - today;
  // 1 second = 1000 ms
  // 1 min = 60 seconds
  // 1 hr = 60 min
  // 2 day = 24 hrs

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHr = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  let days = Math.floor(t / oneDay);

  // 48.852... THE FUTURE DATE CAN BE HIGHER THAN THE CURRENT DATE
  // 48 = DAYS
  // .852... IS THE HOURS - SO WE NEED TO RETRIEVE THIS
  // let hours = t / oneHr;
  // so we need how many hrs, min, secs left
  let hours = Math.floor((t % oneDay) / oneHr);
  let minutes = Math.floor((t % oneHr) / oneMin);
  let seconds = Math.floor((t % oneMin) / 1000);

  const format = function (item) {
    if (item > 10) return item;
    return `0${item}`;
  };

  const values = [days, hours, minutes, seconds];
  items.forEach(function (element, index) {
    element.textContent = format(values[index]);
  });

  // if we've hit our deadline
  if (t < 0) {
    clearInterval(countDown);
    deadline.textContent = "Offer expired";
  }
};

// call it every 1 second
let countDown = setInterval(getRemainingTime, 1000);
getRemainingTime();
