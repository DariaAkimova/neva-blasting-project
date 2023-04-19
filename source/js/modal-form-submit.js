import { sendData } from "./api.js";
import { validateForm } from "./form-validation.js";


const modalFormActions = () => {
  const modalForm = document.querySelector(".form");
  const successMessageFragment = document
    .querySelector("#success")
    .cloneNode(true).content;
  const successMessage = successMessageFragment.querySelector(".success");
  const errorMessageFragment = document
    .querySelector("#error")
    .cloneNode(true).content;
  const errorMessage = errorMessageFragment.querySelector(".error");

  const showErrorMessage = () => {
    modalForm.prepend(errorMessage);
  };

  const showSuccessMessage = () => {
    modalForm.prepend(successMessage);
    clearAll(modalForm);
  };

  const modalFormSubmit = () => {
     modalForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      sendData(showSuccessMessage, showErrorMessage, new FormData(evt.target));
    });
  };

  validateForm(modalForm);

  return modalFormSubmit();
};

export { modalFormActions };
