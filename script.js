const burgerOpen = document.getElementById("burger-open");
const navMenu = document.querySelector(".nav-menu");
const burgerClose = document.getElementById("burger-close");

function toggleNavMenu() {
  navMenu.classList.toggle("active");
  burgerOpen.classList.toggle("hide");
  burgerClose.classList.toggle("active");
}

burgerOpen.addEventListener("click", () => {
  toggleNavMenu();
});

burgerClose.addEventListener("click", () => {
  toggleNavMenu();
});

const navLinks = document.querySelectorAll(".nav-menu .nav-item a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    toggleNavMenu();
  });
});
