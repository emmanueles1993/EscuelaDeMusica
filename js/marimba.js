const dataKeys = ["z", "x", "c", "v", "b", "n", "m", ",", ".", "-"];
const keys = document.querySelectorAll(".bar");

keys.forEach((key) => {
  key.addEventListener("click", () => {
    playNote(key);
  });
});

document.addEventListener("keydown", (e) => {
  const data = e.key;
  const keyIndex = dataKeys.indexOf(data);
  if (keyIndex >= 0) {
    playNote(keys[keyIndex]);
  }
});

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
}
