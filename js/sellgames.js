const form = document.querySelector("form");
const gameTitle = document.querySelector("#game-title");
const money = document.querySelector("#estimated-money");
const checkbox = document.querySelector("¤checkbox");


//VALIDATION
// function validateEmail(email) {
//     const regEx = /\S+@\S+\.\S+/;
//     const patternMatches = regEx.test(email);
//     return patternMatches;
// }

function checkFormErrors(){
    const titleError = document.querySelector(".game-title-err");
    const moneyError = document.querySelector(".estimated-money-err");
    const checkboxError = document.querySelector(".checkbox-err");

    // if (!validateEmail(email.value)){
    //     emailError.innerHTML = '<span class="error-form">- Please fill in your Email</span>';
    //   } else {
    //     emailError.innerHTML = "";
    //   }
}

function submitForm(event){
    const successContainer = document.querySelector(".success-container");
    
    event.preventDefault();
  
    checkFormErrors();
  
    if(gameTitle.value >= 1 /* && checkbox */) {
      successContainer.innerHTML = '<div class="success-msg">You successfully submitted!</div>';
      form.reset();
    } else {
    successContainer.innerHTML = "";
    }
  }; 
  
  form.addEventListener("submit", submitForm);