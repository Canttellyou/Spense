"use strict";
document.querySelector(".info").style.marginTop = "2rem";
const overlay = document.querySelector(".overlay");
const edit = document.querySelector(".edit");
const closeM = document.querySelector(".close-modal");
const overlayOne = document.querySelector(".overlay-1");
var toolbarOptions = [
  [{ size: ["small", false, "large", "huge"] }],
  ["bold", "italic", "underline", "strike"],
  ["link", "image"],
];
var quill = new Quill("#editor", {
  modules: { toolbar: toolbarOptions },
  theme: "snow",
  placeholder: "Start sharing your thoughts...",
});
document.querySelector(".open-editor").addEventListener("click", function () {
  overlay.classList.remove("hide");
  edit.classList.remove("hide");
});

///closing the popup
const closeModal = function () {
  edit.classList.add("hide");
  overlay.classList.add("hide");
};
overlay.addEventListener("click", closeModal);
closeM.addEventListener("click", closeModal);

document.addEventListener("keydown", function (esc) {
  if (esc.key === "Escape" && !edit.classList.contains("hide")) {
    closeModal();
  }
});
document.addEventListener("keydown", function (esc) {
  if (
    esc.key === "Escape" &&
    !document.querySelector(".menu-nav").classList.contains("hide")
  ) {
    document.querySelector(".menu-nav").classList.add("hide");
  }
});

function myFunction(x) {
  x.classList.toggle("change");
  document.querySelector(".menu-nav").classList.toggle("hide");
  overlayOne.classList.toggle("hide");
}
overlayOne.addEventListener("click", function () {
  overlayOne.classList.add("hide");
  document.querySelector(".menu-nav").classList.add("hide");
  document.querySelector(".container").classList.remove("change");
});
document.addEventListener("keydown", function (esc) {
  if (
    esc.key === "Escape" &&
    document.querySelector(".container").classList.contains("change")
  ) {
    document.querySelector(".container").classList.remove("change");
  }
});
