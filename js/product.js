const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const products_url = "https://dinasproject.one/gamehub/wp-json/wc/v3/products/" + id + "?consumer_key=ck_5f05ebc4ec6cd2d4eabe2d9836dd5e07df53d447&consumer_secret=cs_4c7a6a6571a9dde895553b76c61b27ac2aa5c594&per_page=100";


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


