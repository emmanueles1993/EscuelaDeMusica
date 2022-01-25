const keys = ["z", "x", "c", "v", "b", "n", "m", ","];
const circles = document.querySelectorAll(".circle");

circles.forEach((circle) => {
  circle.addEventListener("click", () => {
    playNote(circle);
  });
});
document.addEventListener("keydown", (e) => {
  const key = e.key;
  const keyIndex = keys.indexOf(key);
  if (keyIndex >= 0) {
    playNote(circles[keyIndex]);
  }
});
function playNote(circle) {
  const audioFlauta = document.getElementById(circle.dataset.note);
  audioFlauta.currentTime = 0.5;
  audioFlauta.play();
  circle.classList.add("flauta-active");
  setTimeout(() => {
    circle.classList.remove("flauta-active");
  }, 400);
}
