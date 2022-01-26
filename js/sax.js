const keys_data = ["z", "x", "c", "v", "b", "n", "m", ",", ".", "-"];

const keys = document.querySelectorAll(".sax-item");

keys.forEach((key) => {
  key.addEventListener("click", () => {
    playNote(key);
  });
});

document.addEventListener("keydown", (e) => {
  const key = e.key;

  const keyIndex = keys_data.indexOf(key);

  if (keyIndex >= 0) {
    playNote(keys[keyIndex]);
  }
});

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0.2;
  noteAudio.play();

  key.classList.add("sax-active");

  setTimeout(() => {
    key.classList.remove("sax-active");
  }, 200);
}
