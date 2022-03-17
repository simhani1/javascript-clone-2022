const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const body = document.querySelector("body");
const button = document.querySelector("button");

function pickColorIndex() {
  let leftIdx = Math.floor(Math.random() * colors.length);
  let rightIdx = Math.floor(Math.random() * colors.length);
  while (1) {
    if (leftIdx !== rightIdx) {
      break;
    } else {
      rightIdx = Math.floor(Math.random() * colors.length);
    }
  }
  return {
    leftIndex: leftIdx,
    rightIndex: rightIdx,
  };
}

function changeColor() {
  const colorIndex = pickColorIndex();
  let leftColor = colors[colorIndex.leftIndex];
  let rightcolor = colors[colorIndex.rightIndex];
  body.style.background = `linear-gradient(to right, ${leftColor}, ${rightcolor})`;
}

changeColor();
button.addEventListener("click", changeColor);
