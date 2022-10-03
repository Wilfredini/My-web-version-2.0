/* -------------------------------------------------------------------------- */
/*                                 Menu set-up                                */
/* -------------------------------------------------------------------------- */

const menuLink = document.querySelectorAll(".nav-link");
console.log(menuLink);

menuLink.forEach((element) => {
  element.addEventListener("click", function () {
    menuLink.forEach((item) => item.classList.remove("active"));

    this.classList.add("active");
  });
});

/* -------------------------------------------------------------------------- */
/*                             Slide sidebar menu                             */
/* -------------------------------------------------------------------------- */

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".aside");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menu.classList.add("open");
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menu.classList.remove("open");
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});

/* -------------------------------------------------------------------------- */
/*                                Theme changer                               */
/* -------------------------------------------------------------------------- */

const themeMenuBtn = document.getElementById("theme");
const themeMenu = document.querySelector(".theme-menu");
let themeMenuOpen = false;
themeMenuBtn.addEventListener("click", () => {
  if (!themeMenuOpen) {
    themeMenu.classList.add("open");
    themeMenuOpen = true;
  } else {
    themeMenu.classList.remove("open");
    themeMenuOpen = false;
  }
});
