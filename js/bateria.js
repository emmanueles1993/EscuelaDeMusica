const keys = ["w", "p", "s", "g", "l", "x", "b", ","];
const drums = document.querySelectorAll(".bateria-content-img");

drums.forEach((drum) => {
  drum.addEventListener("click", () => {
    playSound(drum);
  });
});

document.addEventListener("keydown", (e) => {
  const key = e.key;

  const keyIndex = keys.indexOf(key);

  if (keyIndex >= 0) {
    playSound(drums[keyIndex]);
  }
});

function playSound(drum) {
  const audioDrum = document.getElementById(drum.dataset.sound);
  audioDrum.currentTime = 0;
  audioDrum.play();

  drum.classList.add("active-bateria");

  setTimeout(() => {
    drum.classList.remove("active-bateria");
  }, 200);
}
