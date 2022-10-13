/* -------------------------------------------------------------------------- */
/*                                 Menu set-up                                */
/* -------------------------------------------------------------------------- */
const menuLink = document.querySelectorAll(".nav-link");

menuLink.forEach((element) => {
  element.addEventListener("click", function () {
    menuLink.forEach((item) => item.classList.remove("active"));
    setTimeout(function () {
      if (menuOpen && window.innerWidth < 711) {
        menu.classList.remove("open");
      }
    }, 1000);
    this.classList.add("active");
    menuBtn.classList.remove("open");
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
const neonBtn = document.querySelector(".neon");
const lightBtn = document.querySelector(".light");
const darkBtn = document.querySelector(".dark");
const alternateStyle = document.querySelectorAll(".alternate-style");
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
function setActiveStyle(color) {
  alternateStyle.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
      themeMenu.classList.remove("open");
      themeMenuOpen = false;
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}
/* -------------------------------------------------------------------------- */
/*                              Smooth scrolling                              */
/* -------------------------------------------------------------------------- */

document.querySelectorAll("a[href^='#']").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

/* -------------------------------------------------------------------------- */
/*                                Cookie setup                                */
/* -------------------------------------------------------------------------- */

const cookieBox = document.querySelector(".cookie-box");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
  cookieBox.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});
setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed"))
    cookieBox.classList.add("active");
}, 2000);
