
const form = document.querySelector("form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

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

function checkFormErrors(){
    const emailError = document.querySelector(".email-err");
    const passwordError = document.querySelector(".password-err");

    if (!validateEmail(email.value)){
        emailError.innerHTML = '<span class="error-form">- Please fill in your Email</span>';
      } else {
        emailError.innerHTML = "";
      }

      if (!validatePassword(password.value)){
        passwordError.innerHTML = '<span class="error-form">- Please fill in your Password</span>';
      } else {
        passwordError.innerHTML = "";
      }
}

function submitForm(event){
    const successContainer = document.querySelector(".success-container");
    
    event.preventDefault();
  
    checkFormErrors();
  
    if(validateEmail(email.value) && validatePassword(password.value)) {
      successContainer.innerHTML = '<div class="success-msg">SUCCESS! -You are now logged onto your account.</div>';
      form.reset();
    } else {
    successContainer.innerHTML = "";
    }
  }; 
  
  form.addEventListener("submit", submitForm);