const clock = document.querySelector("#clock");
const amPm = document.querySelector(".am_pm");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0") % 12 || 12;
  const minites = String(date.getMinutes()).padStart(2, "0");
  //const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minites}`;
  const isAm = date.getHours() < 12;
  amPm.innerText = isAm ? "AM" : "PM";
}

getClock();
setInterval(getClock, 1000);
