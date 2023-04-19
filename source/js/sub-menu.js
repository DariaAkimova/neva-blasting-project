const subNav = document.querySelector(".sub-nav");
const navToggle = subNav.querySelector(".sub-nav__toggle");

const changeMenuClass = () => {
  subNav.classList.remove("sub-nav--opened");
  subNav.classList.add("sub-nav--closed");
};

const openCloseMenu = () => {
  if (subNav.classList.contains("sub-nav--closed")) {
    subNav.classList.remove("sub-nav--closed");
    subNav.classList.add("sub-nav--opened");
  } else {
    subNav.classList.remove("sub-nav--opened");
    subNav.classList.add("sub-nav--closed");
  }
};

changeMenuClass();
navToggle.addEventListener("click", openCloseMenu);
