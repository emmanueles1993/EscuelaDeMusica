let modalContainer = document.querySelector(".modal-container");
let openModal = document.getElementById("btn");
let closeModal = document.querySelector(".close");

openModal.onclick = () => {
  modalContainer.classList.toggle("modal-active");
};

closeModal.onclick = () => {
  modalContainer.classList.toggle("modal-active");
};
