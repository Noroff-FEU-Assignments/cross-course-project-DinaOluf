const form = document.querySelector("form");
const email = document.querySelector("#email");
const textArea = document.querySelector("#textarea");

//VALIDATION
function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

textArea.onkeyup = function showTextAreaLength() {
    const textAreaCount = event.target.value.length;
    const textAreaCountWrap = document.querySelector(".character-count");

    textAreaCountWrap.innerHTML = `Character count: ${textAreaCount}/500`;
}

function checkFormErrors() {
    const emailError = document.querySelector(".email-err");
    const textAreaError = document.querySelector(".textarea-err");

    if (!validateEmail(email.value)) {
        emailError.innerHTML = '<span class="error-form">- Please fill in your email</span>';
      } else {
        emailError.innerHTML = "";
      }

    if (textArea.textLength > 500) {
        textAreaError.innerHTML = '<span class="error-form">- Description can not be more than 500 characters</span>';
    } else {
        textAreaError.innerHTML = ""
    }
}

function submitForm(event) {
    const successContainer = document.querySelector(".success-container");
    
    event.preventDefault();
  
    checkFormErrors();
  
    if(validateEmail(email.value) && textArea.textLength <= 500) {
      successContainer.innerHTML = '<div class="success-msg">You successfully submitted!</div>';
      form.reset();
    } else {
    successContainer.innerHTML = "";
    }
  }; 
  
  form.addEventListener("submit", submitForm);