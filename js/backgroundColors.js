// const bgColors = [
//   "#ef5777",
//   "#575fcf",
//   "#4bcffa",
//   "#34e7e4",
//   "#0be881",
//   "#f53b57",
//   "#3c40c6",
//   "#0fbcf9",
//   "#00d8d6",
//   "#05c46b",
//   "#ffc048",
//   "#ffdd59",
//   "#ff5e57",
//   "#d2dae2",
//   "#485460",
//   "#ffa801",
//   "#ffd32a",
//   "#ff3f34",
// ];

const bgColors = ["#ECFFF4", "#F2F3F7"];
const body = document.body;

function setRandomColor() {
  const chosenbgColor = bgColors[Math.floor(Math.random() * bgColors.length)];

  body.style.backgroundColor = `${chosenbgColor}`;
}

setRandomColor();
