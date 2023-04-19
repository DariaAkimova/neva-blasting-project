import "./scroll-up.js";
import "./menu-mobile.js";
import "./sub-menu.js";
import "./slider.js";
import { mainFormSubmit } from "./main-form-submit.js";


const noScriptElements = document.querySelectorAll(".no-js");

const activateScripts = () => {
  noScriptElements.forEach((element) => element.classList.remove("no-js"));
};

activateScripts();

mainFormSubmit();
