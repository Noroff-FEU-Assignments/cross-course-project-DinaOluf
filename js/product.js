const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const products_url = "https://dinasproject.one/gamehub/wp-json/wc/v3/products/" + id + "?consumer_key=ck_30aca4d54877b70d59f54f5aa514d1039793b73f&consumer_secret=cs_efb972c8c61f811623b386990607384bbbdbed25&per_page=100";


async function getProductDetails() {
    try {
        const response = await fetch(products_url);
        const product = await response.json();

        changeTitle(product);

        getHtml(product);

    } catch (error) {
    console.log("API error");
}
}

getProductDetails();

function changeTitle(product){
    document.title = "GameHub | Product | " + product.name;
}

function getHtml(product) {
const productName = document.querySelector(".product-name");
const productPrice = document.querySelector(".product-price");
const productDescription = document.querySelector(".product-desc");
const productImage = document.querySelector(".game");

productName.innerHTML = `${product.name}`;
productPrice.innerHTML = `${product.price}€`;
productDescription.innerHTML = `${product.description}`;

for(i = 0; i < product.images.length; i++){
    productImage.innerHTML = `<img src="${product.images[0].src}" id="product-image" alt="${product.images[0].alt}">`
}
}

//ADD TO CART - simulation
const addToCartButton = document.querySelector("#add-cart-button");
const cartNumberContainer = document.querySelector(".cart1-hidden");

let count = 0;

addToCartButton.onclick = function () {
count += 1;

cartNumberContainer.innerHTML = `<div id="cart1">${count}<div>`;
}


