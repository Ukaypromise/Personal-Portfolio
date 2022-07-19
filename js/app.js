// Navigation
const hambugerMenu = document.querySelector(".hambuger");

const navMenu = document.querySelector(".nav-menu");

const navLinks = document.querySelectorAll(".nav-link");
// Modal
const modal = document.querySelector(".modal-container");

const closemodal = document.querySelector(".btn-x");

const btnWork = document.querySelector("btn");
console.log(btnWork);

hambugerMenu.addEventListener("click", () => {
  hambugerMenu.classList.toggle("active");

  navMenu.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hambugerMenu.classList.remove("active");

    navMenu.classList.remove("active");
  });
});

// Modal Pop-up

btnWork.addEventListener("click", () => {
  modal.style.display = "block";
});
