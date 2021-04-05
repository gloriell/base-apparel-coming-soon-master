const formInput = document.querySelector("#form");
const mobileFormInput = document.querySelector("#mobileForm");
const emailInput = document.querySelector("#email");
const mobileEmailInput = document.querySelector("#emailMedia");
const submitBtn = document.querySelector("#btn");
const mobileSubmitBtn = document.querySelector("#btnMedia");

// Desktop JS

formInput.addEventListener("submit", (e) => {
  if (emailInput.value === "") {
    showError(emailInput, "Email is required !");
  } else if (!isValidEmail(email.value)) {
    showError(email, "Please provide a valid email! ");
  } else {
    showSuccess(emailInput, "Email is not used by another user !");
  }

  e.preventDefault();
});

function showError(input, message) {
  input.className = "content__wrapper__b__input__email error";
  const small = document.querySelector(".smallDesktop");
  small.innerText = message;
}

function showSuccess(input, message) {
  input.className = "content__wrapper__b__input__email succes";
  const small = document.querySelector(".smallDesktop");
  small.innerText = message;
  small.style.color = "green";
}

// Mobile JS

mobileFormInput.addEventListener("submit", (e) => {
  if (mobileEmailInput.value === "") {
    showErrorMedia(mobileEmailInput, "Email is required !");
  } else if (!isValidEmail(email.value)) {
    showErrorMedia(email, "Please provide a valid email! ");
  } else {
    showSuccessMedia(mobileEmailInput, "Email is not used by another user !");
  }
  e.preventDefault();
});

function showErrorMedia(input, message) {
  input.className = "media__wrapper__c__input__email error";
  const small = document.querySelector(".smallMedia");
  small.innerText = message;
}

function showSuccessMedia(input, message) {
  input.className = "media__wrapper__c__input__email succes";
  const small = document.querySelector(".smallMedia");
  small.innerText = message;
  small.style.color = "green";
}

// Check email is valid
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLocaleLowerCase());
}
