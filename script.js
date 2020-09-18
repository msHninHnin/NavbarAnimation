const menubar = document.getElementById("menu-bar");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
const overlay = document.getElementById("overlay");
const navitems = [nav1, nav2, nav3, nav4, nav5];

function navAnimation(direction1, direction2) {
  navitems.forEach((nav, i) => {
    console.log(
      "slide-" + direction1 + "-" + (i + 1),
      "slide-" + direction2 + "-" + (i + 1)
    );
    nav.classList.replace(
      "slide-" + direction1 + "-" + (i + 1),
      "slide-" + direction2 + "-" + (i + 1)
    );
  });
}

function toggleNav() {
  menubar.classList.toggle("change");
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
    navAnimation("out", "in");
  } else {
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
    navAnimation("in", "out");
  }
}

menubar.addEventListener("click", toggleNav);

navitems.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});
