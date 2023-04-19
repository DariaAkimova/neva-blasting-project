const mainNav = document.querySelector(".main-nav");
const navToggle = mainNav.querySelector(".main-nav__toggle");

const changeMenuClass = () => {
  mainNav.classList.remove("main-nav--opened");
  mainNav.classList.add("main-nav--closed");
};

const openCloseMenu = () => {
  if (mainNav.classList.contains("main-nav--closed")) {
    mainNav.classList.remove("main-nav--closed");
    mainNav.classList.add("main-nav--opened");
  } else {
    mainNav.classList.remove("main-nav--opened");
    mainNav.classList.add("main-nav--closed");
  }
};

changeMenuClass();
navToggle.addEventListener("click", openCloseMenu);
