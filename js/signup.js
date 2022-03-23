
const form = document.querySelector("form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

//VALIDATION
function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function validatePassword(password) {
    const regEx = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    const patternMatches = regEx.test(password);
    return patternMatches;
}

function checkFormErrors() {
    const emailError = document.querySelector(".email-err");
    const passwordError = document.querySelector(".password-err");
    const confirmPasswordError = document.querySelector(".confirm-password-err")

    if (!validateEmail(email.value)) {
        emailError.innerHTML = '<span class="error-form">- Please fill in your email</span>';
      } else {
        emailError.innerHTML = "";
      }

      if (!validatePassword(password.value)) {
        passwordError.innerHTML = '<span class="error-form">- Your password must be 8-16 characters long and contain at least one number</span>';
      } else {
        passwordError.innerHTML = "";
      }

      if (confirmPassword.value === password.value) {
        confirmPasswordError.innerHTML = "";
      } else {
        confirmPasswordError.innerHTML = '<span class="error-form">- Please confirm your password</span>';
      }
}

function submitForm(event) {
    const successContainer = document.querySelector(".success-container");
    
    event.preventDefault();
  
    checkFormErrors();
  
    if(validateEmail(email.value) && validatePassword(password.value) && confirmPassword.value === password.value) {
      successContainer.innerHTML = '<div class="success-msg">SUCCESS! -Thank you for making an account.</div>';
      form.reset();
    } else {
    successContainer.innerHTML = "";
    }
  }; 
  
  form.addEventListener("submit", submitForm);