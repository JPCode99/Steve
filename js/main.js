const overLayBtn = document.querySelector("#overlay-btn");
const overLayDiv = document.querySelector(".overlay-div");
const modalSection = document.querySelector(".modal-section");

overLayBtn.addEventListener("click", function () {
  overLayDiv.classList.add("hidden-overlay-div");
});
modalSection.addEventListener("click", function () {
  overLayDiv.classList.toggle("show-overlay-div");
});
