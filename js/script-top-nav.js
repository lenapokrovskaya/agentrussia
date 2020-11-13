var navMain = document.querySelector(".top-nav");
var navToggle = document.querySelector(".top-nav_toggle");

navMain.classList.remove("top-nav-nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("top-nav-closed")) {
    navMain.classList.remove("top-nav-closed");
    navMain.classList.add("top-nav-opened");
  } else {
    navMain.classList.add("top-nav-closed");
    navMain.classList.remove("top-nav-opened");
  }
});
