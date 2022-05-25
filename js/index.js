const frontPreOrder = document.querySelector(".preorder-container");
const frontNewGames = document.querySelector(".front-new-games");
const frontUsedGames = document.querySelector(".front-used-games");

const API_URL = "https://dinasproject.one/gamehub/wp-json/wc/v3/products?consumer_key=ck_5f05ebc4ec6cd2d4eabe2d9836dd5e07df53d447&consumer_secret=cs_4c7a6a6571a9dde895553b76c61b27ac2aa5c594&per_page=100";

async function getProducts() {
    try {
        const response = await fetch(API_URL);
        const products = await response.json();

        console.log(products)

        addPreOrderHtml(products);
        addNewProductsHtml(products);
        addUsedProductsHtml(products);

    } catch {
        console.log("API error");
    }
}

getProducts();

function addPreOrderHtml(products) {
            
    frontPreOrder.innerHTML = "";

    for(let i = 0; i < products.length; i++){
        if(products[i].id === 41 || products[i].id === 42 || products[i].id === 43) {
            frontPreOrder.innerHTML += `<div class="game-container">
            <a href="/products/products.html?name=${products[i].name}&id=${products[i].id}">
                <img src="${products[i].images[0].src}" class="front_games" alt="${products[i].images[0].alt}">
                <div class="preorder-tag">${products[i].price}€</div>
            </a>
        </div>
        <p>${products[i].name}</p>`
        }
    } 
}

function addNewProductsHtml(products) {
            
    frontNewGames.innerHTML = "";

    for(let i = 0; i < products.length; i++){
        if(products[i].id === 44 || products[i].id === 45 || products[i].id === 46 || products[i].id === 47 || products[i].id === 48 || products[i].id === 49) {

        frontNewGames.innerHTML += `<div class="game-container">
            <a href="/products/products.html?name=${products[i].name}&id=${products[i].id}">
                <img src="${products[i].images[0].src}" class="front_small" alt="${products[i].images[0].alt}">
                <div class="pricetag">${products[i].price}€</div>
            </a>
        </div>`
        } 
    }
}

function addUsedProductsHtml(products) {
            
    frontUsedGames.innerHTML = "";

    for(let i = 0; i < products.length; i++){
        if(products[i].id === 51 || products[i].id === 52 || products[i].id === 53 || products[i].id === 55 || products[i].id === 56 || products[i].id === 57) {

        frontUsedGames.innerHTML += `<div class="game-container">
            <a href="/products/products.html?name=${products[i].name}&id=${products[i].id}">
                <img src="${products[i].images[0].src}" class="front_small" alt="${products[i].images[0].alt}">
                <div class="pricetag">${products[i].price}€</div>
            </a>
        </div>`
        } 
    }
}
