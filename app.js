// Splash Screen
let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 400);
    });

    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx + 1) * 50);
      });
    }, 2000);

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 2300);
  });
});

// Modal
let modalkru = document.getElementById("modal-kru");
let modalcakru = document.getElementById("modal-cakru");

let btnkru = document.getElementById("button-kru");
let btncakru = document.getElementById("button-cakru");

let span = document.getElementsByClassName("close")[0];

btnkru.onclick = function () {
  modalkru.style.display = "block";
};

window.onclick = function (event) {
  if (event.target == modalkru) {
    modalkru.style.display = "none";
  } else if (event.target == modalcakru) {
    modalcakru.style.display = "none";
  }
};

btncakru.onclick = function () {
  modalcakru.style.display = "block";
};

span.onclick = function () {
  modalkru.style.display = "none";
  modalcakru.style.display = "none";
};
