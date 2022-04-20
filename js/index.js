const frontPreOrder = document.querySelector(".preorder-container");
const frontNewGames = document.querySelector(".front-new-games");
const frontUsedGames = document.querySelector(".front-used-games");

const API_URL = "https://dinasproject.one/gamehub/wp-json/wc/v3/products?consumer_key=ck_30aca4d54877b70d59f54f5aa514d1039793b73f&consumer_secret=cs_efb972c8c61f811623b386990607384bbbdbed25&per_page=100";

async function getProducts() {
    try {
        const response = await fetch(API_URL);
        const products = await response.json();

        console.log(products);



        addPreorderHtml(products);

    } catch {
        console.log("API error");
    }
}

getProducts();

function addPreorderHtml(products) {
            
    frontPreOrder.innerHTML = "";

    for(let i = 0; i < products.length; i++){
        if(products[i].categories[0].name !== "Pre-order") {
            continue
        }

        frontPreOrder.innerHTML += `<div class="game-container">
            <a href="/products/products.html?name=${products[i].name}&id=${products[i].id}">
                <img src="${products[i].images[0].src}" class="front_games" alt="${products[i].images[0].alt}">
                <div class="preorder-tag">${products[i].price}€</div>
            </a>
        </div>
        <p>${products[i].name}</p>`
        
        if(i === 2) {
            break
        } 
    } 
}
