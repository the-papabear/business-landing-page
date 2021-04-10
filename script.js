"use strict";
const btnLearnMore = document.querySelector("#learn-more");
const btnBackToTop = document.querySelector("#to-top");
const menubar = document.querySelector(".menubar");
const section1 = document.querySelector("#section--1");

const contact = document.querySelectorAll(".btn--contact");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnSubmit = document.querySelector(".btn--submit");
const closeModal = document.querySelector(".btn--close-modal");

console.log(contact);
//Smooth scroll to sections:
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document
      .querySelector(id)
      .scrollIntoView({ behavior: "smooth", block: "center" });
  }
});

//Learn more button smooth scroll to section:
btnLearnMore.addEventListener("click", function (e) {
  e.preventDefault();

  section1.scrollIntoView({ behavior: "smooth", block: "center" });
});

//Back to top button:
function showBtn() {
  if (document.documentElement.scrollTop > 25) {
    btnBackToTop.style.display = "block";
  } else {
    btnBackToTop.style.display = "none";
  }
}

window.onscroll = function () {
  showBtn();
};

btnBackToTop.addEventListener("click", function () {
  document.documentElement.scrollIntoView({ behavior: "smooth" });
});

//Contact form modal:
for (let i = 0; i < contact.length; i++) {
  contact[i].addEventListener("click", function (e) {
    e.preventDefault();
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

closeModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
