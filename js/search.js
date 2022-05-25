const gamesContainer = document.querySelector(".allgames");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const result = params.get("result");

const API_URL = "https://dinasproject.one/gamehub/wp-json/wc/v3/products?consumer_key=ck_5f05ebc4ec6cd2d4eabe2d9836dd5e07df53d447&consumer_secret=cs_4c7a6a6571a9dde895553b76c61b27ac2aa5c594&per_page=100";

async function getProducts() {
    try {
        const response = await fetch(API_URL);
        const products = await response.json();

        showSearchResults(products);

    } catch {
        console.log("API error");
    }
}

getProducts();

function showSearchResults(products) {
            
    gamesContainer.innerHTML = "";

    for(let i = 0; i < products.length; i++){
        const name = products[i].name.trim().toLowerCase();
        const description = products[i].description.trim().toLowerCase();
        const categories = products[i].categories[0].name.trim().toLowerCase();

        const breadcrumb = document.querySelector(".breadcrumb");

        if(name.includes(result) 
        || description.includes(result)
        || categories.includes(result)
        // || tags???
        ) {

            if(products[i].categories[0].name === "Used"){
                gamesContainer.innerHTML += `<div class="game-container">
                <a href="/products/products.html?name=${products[i].name}&id=${products[i].id}">
                    <img src="${products[i].images[0].src}" class="front_small" alt="${products[i].images[0].alt}">
                    <div class="pricetag2">${products[i].price}€</div>
                </a>
            </div>`
            } else {
                gamesContainer.innerHTML += `<div class="game-container">
                <a href="/products/products.html?name=${products[i].name}&id=${products[i].id}">
                    <img src="${products[i].images[0].src}" class="front_small" alt="${products[i].images[0].alt}">
                    <div class="pricetag">${products[i].price}€</div>
                </a>
            </div>`
            }
        }
                    
        breadcrumb.innerHTML = `<a href="index.html">Home</a> > Results for "${result}"`
    }
    if(gamesContainer.children.length === 0){
        gamesContainer.innerHTML = "Sorry, we could not find your search. Please try something else."
    }
}

