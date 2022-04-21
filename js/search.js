const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const term = params.get("term");

const API_URL = "https://dinasproject.one/gamehub/wp-json/wc/v3/products?consumer_key=ck_30aca4d54877b70d59f54f5aa514d1039793b73f&consumer_secret=cs_efb972c8c61f811623b386990607384bbbdbed25&per_page=100";

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

}