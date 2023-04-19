import { modalFormActions } from "./modal-form-submit.js";

const orderBtns = [...document.querySelectorAll(".order-btn")];

const openModal = () => {
  const modalElementFragment = document
    .querySelector("#modal-form")
    .cloneNode(true).content;
  const modalElement = modalElementFragment.querySelector(".modal");
  const closeModalBtn = modalElement.querySelector(".close-btn");

  const onBtnClick = () => closeModal();

  const addListenerClick = () =>
    closeModalBtn.addEventListener("click", onBtnClick);

  const onDocumentEscKeydown = (evt) => {
    if (evt.key === "Escape") {
      evt.preventDefault();
      closeModal();
    }
  };

  const addListenerEscKeydown = () =>
    document.addEventListener("keydown", onDocumentEscKeydown);

  const removeAllListeners = () => {
    document.removeEventListener("click", onBtnClick);
    document.removeEventListener("keydown", onDocumentEscKeydown);
  };

  function closeModal() {
    modalElement.remove();
    removeAllListeners();
  }

  const showModal = () => {
    document.body.prepend(modalElement);
    modalFormActions();
    addListenerClick();
    addListenerEscKeydown();
  };

  return showModal();
};

orderBtns.forEach((button) => button.addEventListener("click", openModal));
