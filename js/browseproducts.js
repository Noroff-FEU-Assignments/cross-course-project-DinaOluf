const gamesContainer = document.querySelector(".allgames");

const API_URL = "https://dinasproject.one/gamehub/wp-json/wc/v3/products?consumer_key=ck_30aca4d54877b70d59f54f5aa514d1039793b73f&consumer_secret=cs_efb972c8c61f811623b386990607384bbbdbed25&per_page=100";

async function getProducts() {
    try {
        const response = await fetch(API_URL);
        const products = await response.json();

        if(document.URL.includes("newgames.html")){
            addNewProductsHtml(products);
        }
        if(document.URL.includes("usedgames.html")){
            addUsedProductsHtml(products);
        }
        if(document.URL.includes("preorder.html")){
            addPreOrderHtml(products);
        }

    } catch {
        console.log("API error");
    }
}

getProducts();

function addNewProductsHtml(products) {
            
    gamesContainer.innerHTML = "";

    for(let i = 0; i < products.length; i++){
        if(products[i].categories[0].name === "New") {
            gamesContainer.innerHTML += `<div class="game-container">
            <a href="/products/products.html?name=${products[i].name}&id=${products[i].id}">
                <img src="${products[i].images[0].src}" class="front_small" alt="${products[i].images[0].alt}">
                <div class="pricetag">${products[i].price}€</div>
            </a>
        </div>`
        }
    } 
}

function addUsedProductsHtml(products) {
            
    gamesContainer.innerHTML = "";

    for(let i = 0; i < products.length; i++){
        if(products[i].categories[0].name === "Used") {
            gamesContainer.innerHTML += `<div class="game-container">
            <a href="/products/products.html?name=${products[i].name}&id=${products[i].id}">
                <img src="${products[i].images[0].src}" class="front_small" alt="${products[i].images[0].alt}">
                <div class="pricetag2">${products[i].price}€</div>
            </a>
        </div>`
        }
    } 
}

function addPreOrderHtml(products) {
            
    gamesContainer.innerHTML = "";

    for(let i = 0; i < products.length; i++){
        if(products[i].categories[0].name === "Pre-order") {
            gamesContainer.innerHTML += `<div class="game-text-container">
            <div class="game-container">
                <a href="/products/products.html?name=${products[i].name}&id=${products[i].id}">
                    <img src="${products[i].images[0].src}" class="front_small" alt="${products[i].images[0].alt}">
                    <div class="pricetag">${products[i].price}€</div>
                </a>
              </div>
            <div>
                <h3>${products[i].name}</h3>
                <p>${products[i].description}</p>
            </div>
        </div>`
        }
    } 
}