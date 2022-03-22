const addToCartButton = document.querySelector("#add-cart-button");
const cartNumberContainer = document.querySelector(".cart1-hidden");

let count = 0;

addToCartButton.onclick = function () {
count += 1;

cartNumberContainer.innerHTML = `<div id="cart1">${count}<div>`;
}
