const upButton = document.querySelector(".button-up");

const goUp = () => window.scrollTo(0, 0);

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    upButton.classList.remove("hidden");
    upButton.addEventListener("click", goUp);
  } else {
    upButton.classList.add("hidden");
    upButton.removeEventListener("click", goUp);
  }
});
