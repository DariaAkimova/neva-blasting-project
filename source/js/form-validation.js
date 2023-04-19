const regExPhone = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
const regExEmail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;

const validateForm = (someForm) => {
  const allInputs = someForm.querySelectorAll(".input");
  const phoneInput = someForm.querySelector(".input--phone");
  const emailInput = someForm.querySelector(".input--email");
  const requiredInputs = someForm.querySelectorAll("input[required]");
  const submitButton = someForm.querySelector(".form__submit");
  const validationMessage = someForm.querySelector(".validation-error");
  const contactInputs = someForm.querySelectorAll(".contacts-form__input");

  const testCorrectPhoneInput = () => {
    const phoneValue = phoneInput.value;

    if (regExPhone.test(phoneValue)) {
      phoneInput.setCustomValidity("");
      phoneInput.classList.remove("input--error");
    } else {
      phoneInput.setCustomValidity(`Введите корректный номер телефона`);
      phoneInput.classList.add("input--error");
    }
    phoneInput.reportValidity();
  };

  const testCorrectEmailInput = () => {
    const emailValue = emailInput.value;

    if (regExEmail.test(emailValue)) {
      emailInput.setCustomValidity("");
      emailInput.classList.remove("input--error");
    } else {
      emailInput.setCustomValidity(`Введите корректный email`);
      emailInput.classList.add("input--error");
    }
    emailInput.reportValidity();
  };

  const onInputValidate = () => {
    contactInputs.forEach((input) => {
      if (input === phoneInput) {
        input.addEventListener("input", testCorrectPhoneInput);
      } else if (input === emailInput) {
        input.addEventListener("input", testCorrectEmailInput);
      }
    });
  };

  const showValidationMessage = () => {
    const formWithError = [...requiredInputs].some(
      (input) => (input.type === "checkbox" && !input.checked) || !input.value
    );

    if (formWithError) {
      validationMessage.classList.remove("hidden");
    } else {
      validationMessage.classList.add("hidden");
    }
  };

  const showMessageOnInput = () => {
    allInputs.forEach((input) => {
      input.addEventListener("input", showValidationMessage);
    });
  };

  submitButton.addEventListener("click", () => {
    showValidationMessage();
    showMessageOnInput();
    testCorrectPhoneInput();
    testCorrectEmailInput();
    onInputValidate();
  });

  someForm.addEventListener("keydown", (evt) => {
    if (evt.key === "Enter") {
      showValidationMessage();
      showMessageOnInput();
    }
  });
};

export { validateForm };
