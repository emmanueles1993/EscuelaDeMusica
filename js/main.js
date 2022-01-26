let piano = document.getElementById("piano");
let bateria = document.getElementById("bateria");
let marimba = document.getElementById("marimba");

let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");

let modalContainer = document.querySelector(".modal-container");
let openModal = document.getElementById("btn");
let closeModal = document.querySelector(".close");

openModal.onclick = () => {
  modalContainer.classList.toggle("modal-active");
};

closeModal.onclick = () => {
  modalContainer.classList.toggle("modal-active");
};

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
