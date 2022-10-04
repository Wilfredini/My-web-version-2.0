/* -------------------------------------------------------------------------- */
/*                                 Menu set-up                                */
/* -------------------------------------------------------------------------- */

const menuLink = document.querySelectorAll(".nav-link");
console.log(menuLink);

menuLink.forEach((element) => {
  element.addEventListener("click", function () {
    menuLink.forEach((item) => item.classList.remove("active"));
    setTimeout(function () {
      if (menuOpen) {
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

/* -------------------------------------------------------------------------- */
/*                              Smooth scrolling                              */
/* -------------------------------------------------------------------------- */

function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animationScroll(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animationScroll);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animationScroll);
}

smoothScroll(".about", 1000);
