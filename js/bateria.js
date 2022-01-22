const drums = document.querySelectorAll(".bateria-content-img");

drums.forEach((drum) => {
  drum.addEventListener("click", () => {
    playSound(drum);
  });
});

function playSound(drum) {
  const audioDrum = document.getElementById(drum.dataset.sound);
  audioDrum.currentTime = 0;
  audioDrum.play();
}
