const cross = document.querySelector(".cross");
const cartItem = document.querySelector(".cart-item");
const totalPrice = document.querySelector(".total-price");
const cartNumber = document.querySelector("#cart1");
const checkoutButton = document.querySelector(".checkout-now");

cross.onclick = function () {
cartItem.innerHTML = `<a href="/checkout.html" class="links">Undo</a>`;
totalPrice.innerHTML = "0€"
cartNumber.parentElement.removeChild(cartNumber);
checkoutButton.style = "background: grey; box-shadow: none; cursor: auto;";
checkoutButton.removeAttribute("href");
}