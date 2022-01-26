let piano = document.getElementById("piano");
let bateria = document.getElementById("bateria");
let marimba = document.getElementById("marimba");

let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

piano.addEventListener("click", () => {
  window.location.assign("./piano.html");
});

bateria.addEventListener("click", () => {
  window.location.assign("./bateria.html");
});

marimba.addEventListener("click", () => {
  window.location.assign("./marimba.html");
});
