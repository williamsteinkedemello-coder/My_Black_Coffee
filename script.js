const burger = document.getElementById("burger-open");
const mobileNav = document.getElementById("mobileNav");
const burgerClose = document.getElementById("closeBtn");

burger.addEventListener("click", () => {
  mobileNav.classList.add("active");
});

burgerClose.addEventListener("click", () => {
  mobileNav.classList.remove("active");
});

/* Upon clicking a given nav link in the mobile nav, it'll close. */
const navLinks = document.querySelectorAll(".mobile-nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("active");
  });
});
