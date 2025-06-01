const overLayBtn = document.querySelector("#overlay-btn");
const overLayDiv = document.querySelector(".overlay-div");
const headerViedo = document.querySelector("#header-video");

overLayBtn.addEventListener("click", function () {
  overLayDiv.classList.add("hidden-overlay-div");
});
headerViedo.addEventListener("click", function () {
  overLayDiv.classList.remove("hidden-overlay-div");
});
