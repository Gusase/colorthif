import ColorThief from "./dist/color-thief.mjs";

const colorThief = new ColorThief();
const img = document.querySelector("#pen");
const body = document.querySelector("#canvas");
const tx = document.querySelector(".text-xl");

function getColor() {
  // get pallet ngambil 2 waran ternyata
  const domi = colorThief.getPalette(img, 2);
  tx.textContent = domi;

  if (domi.length >= 2) {
    const col1 = `rgb(${domi[0][0]}, ${domi[0][1]}, ${domi[0][2]})`;
    const col2 = `rgb(${domi[1][0]}, ${domi[1][1]}, ${domi[1][2]})`;

    // Mengatur gradient linear pada latar belakang body
    body.style.background = `linear-gradient(to right, ${col1} 150px, ${col2} 100%)`;
  }
}

if (img.complete) {
  getColor();
} else {
  img.addEventListener("load", getColor);
}
