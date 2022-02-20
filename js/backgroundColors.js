const bgColors = ["#ECFFF4", "#F2F3F7", "#F2F3F7"];
const body = document.body;

function setRandomColor() {
  const chosenbgColor = bgColors[Math.floor(Math.random() * bgColors.length)];

  body.style.backgroundColor = `${chosenbgColor}`;
}

setRandomColor();
