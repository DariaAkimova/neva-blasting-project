import { sendData } from "./api.js";
import { validateForm } from "./form-validation.js";

const form = document.querySelector(".form");
const successMessageFragment = document
  .querySelector("#success")
  .cloneNode(true).content;
const successMessage = successMessageFragment.querySelector(".success");
const errorMessageFragment = document
  .querySelector("#error")
  .cloneNode(true).content;
const errorMessage = errorMessageFragment.querySelector(".error");

const closeMessage = () => {
  if (form.firstChild === errorMessage) {
    closeErrorMessage();
  } else if (form.firstChild === successMessage) {
    closeSuccessMessage();
  }
};

const onMessageClick = () => closeMessage();

const addListenerClick = () =>
  document.addEventListener("click", onMessageClick);

const onDocumentEscKeydown = (evt) => {
  if (evt.key === "Escape") {
    evt.preventDefault();
    closeMessage();
  }
};

const addListenerEscKeydown = () =>
  document.addEventListener("keydown", onDocumentEscKeydown);

const removeAllListeners = () => {
  document.removeEventListener("click", onMessageClick);
  document.removeEventListener("keydown", onDocumentEscKeydown);
};

function closeErrorMessage() {
  errorMessage.remove();
  removeAllListeners();
}

function closeSuccessMessage() {
  successMessage.remove();
  removeAllListeners();
}

const showErrorMessage = () => {
  form.prepend(errorMessage);
  addListenerClick();
  addListenerEscKeydown();
};

const clearAll = (form) => form.reset();

const showSuccessMessage = () => {
  form.prepend(successMessage);
  clearAll(form);
  addListenerClick();
  addListenerEscKeydown();
};

const mainFormSubmit = () => {
  if (form) {
    validateForm(form);
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      sendData(showSuccessMessage, showErrorMessage, new FormData(evt.target));
    });
  }
};

export { mainFormSubmit };
