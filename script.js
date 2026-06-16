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

  //Guard Clause: Ensure elements exist before proceeding
  if (!burger || !mobileNav || !burgerClose) return;

  // Open Menu Function
  const openMenu = () => {
    mobileNav.classList.add("active");
    burger.setAttribute("aria-expanded", "true");
    mobileNav.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  // Close Menu Function
  const closeMenu = () => {
    mobileNav.classList.remove("active");
    burger.setAttribute("aria-expanded", "false");
    mobileNav.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "auto";
  };

  //Click Event Listeners for opening and closing
  burger.addEventListener("click", openMenu);
  burgerClose.addEventListener("click", closeMenu);
  
  // Close menu when a link is clicked
  const navLinks = document.querySelectorAll(".mobile-nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close menu when clicking outside of the menu
  document.addEventListener("click", (event) => {
    const isClickInsideMenu = mobileNav.contains(event.target);
    const isClickOnBurger = burger.contains(event.target);  

    // Close menu if the click is outside the menu and the burger icon
    if (!isClickInsideMenu && !isClickOnBurger) {
      closeMenu();
    }
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
