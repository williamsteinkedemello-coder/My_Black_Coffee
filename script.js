document.addEventListener("DOMContentLoaded", function () {
  initMobileNavigation();
  initThemeToggle();  
});

/**
 * 1. Mobile Drawer Navigation Controller
 * Manages drawer open/close state, accessibilities, and click-outside features.
 */

function initMobileNavigation() {
  const burger = document.getElementById("burger-open");
  const mobileNav = document.getElementById("mobileNav");
  const burgerClose = document.getElementById("closeBtn");

  if (!burger || !mobileNav || !burgerClose) return;

  burger.addEventListener("click", () => {
    mobileNav.classList.add("active");
  });

  burgerClose.addEventListener("click", () => {
    mobileNav.classList.remove("active");
  });
  
  const navLinks = document.querySelectorAll(".mobile-nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active");
    });
  });
}

function initThemeToggle() {
  const toggleTheme = document.querySelector(".dark-mode");
  if (!toggleTheme) return;

  toggleTheme.addEventListener("click", () => {
  const html = document.documentElement;

  if (html.dataset.theme === "dark") {
    html.dataset.theme = "light";
    toggleTheme.textContent = "Dark Mode On";
  } else {
    html.dataset.theme = "dark";
    toggleTheme.textContent = "Dark Mode Off";
  }
});
}
