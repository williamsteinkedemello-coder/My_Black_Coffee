const burger = document.getElementById("burger-open");
const navMenu = document.querySelector(".nav-menu");
const burgerClose = document.getElementById("closeBtn");

burger.addEventListener("click", () => {
  mobileNav.classList.add("active");
});

burgerClose.addEventListener("click", () => {
  mobileNav.classList.remove("active");
});

/*function toggleNavMenu() {
  navMenu.classList.toggle("active");
  burgerOpen.classList.toggle("hide");
  burgerClose.classList.toggle("active");
}

burgerOpen.addEventListener("click", () => {
  toggleNavMenu();
});

burgerClose.addEventListener("click", () => {
  toggleNavMenu();
});*/

/* Upon clicking a given nav link in the nav menu, it'll close. */
const navLinks = document.querySelectorAll(".nav-menu .nav-item a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    toggleNavMenu();
  });
});
