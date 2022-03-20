const form = document.querySelector("form");
const gameTitle = document.querySelector("#game-title");
const money = document.querySelector("#estimated-money");
const checkbox = document.querySelector("#checkbox");


//VALIDATION
function validateNumbers(numbers) {
  const regEx = /^[1-9][0-9]?$|^100$/;
  const patternMatches = regEx.test(numbers);
  return patternMatches;
}

function checkFormErrors(){
    const titleError = document.querySelector(".game-title-err");
    const moneyError = document.querySelector(".estimated-money-err");
    const checkboxError = document.querySelector(".checkbox-err");

    if (!gameTitle.value.trim().length >= 1){ 
        titleError.innerHTML = '<span class="error-form">- Please fill in the Game title</span>';
      } else {
        titleError.innerHTML = "";
      }

      if (!validateNumbers(money.value)) {
        moneyError.innerHTML = '<span class="error-form">- Please only use numbers from 1-100</span>';
      } else {
        moneyError.innerHTML = "";
      }

      if(!checkbox.checked){
        checkboxError.innerHTML = '<span class="error-form">- You need to agree to Terms of Service</span>';
      } else {
        checkboxError.innerHTML = ""
      }
}

function submitForm(event){
    const successContainer = document.querySelector(".success-container");
    
    event.preventDefault();
  
    checkFormErrors();
  
    if(gameTitle.value.trim().length >= 1 && validateNumbers(money.value) && checkbox.checked) {
      successContainer.innerHTML = '<div class="success-msg">SUCCESS! -You will hear from us within a week.</div>';
      form.reset();
    } else {
    successContainer.innerHTML = "";
    }
  }; 
  
  form.addEventListener("submit", submitForm);