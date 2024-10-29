//your JS code here. If required.
const line = document.getElementById("line");
let angle = 0;

function rotateLine() {
  angle += 2; // Increase angle by 2 degrees every call
  line.style.transform = `rotate(${angle}deg) translate(-50%, -50%)`;
}

setInterval(rotateLine, 20)