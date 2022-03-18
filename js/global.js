const optionsButton = document.querySelector("#options_icon");
const headerBar = document.querySelector("header");

function showOptions() {
headerBar.innerHTML += `<div class="options-menu">
         <div class="topic">
            <div class="menu-heading">
                <img src="/images/Controller.png"></img>
                <h3>Games</h3>
            </div>
            <ul>
                <li>Buy New Games</li>
                <li>Buy Used Games</li>
                <li>Pre-Order Games</li>
                <li>Sell Your Games</li>
            </ul>
        </div>
        <div class="topic">
            <div class="menu-heading">
                <img src="/images/Mail-icon.png"></img>
                <h3>Contact us</h3>
            </div>
            <ul>
                <li>Service@GameHub.com</li>
                <li>+1234567890</li>
            </ul>
        </div>
    </div>`

}

function removeOptions() {
    optionsMenu = "";
}

optionsButton.addEventListener("mouseenter", showOptions);

const optionsMenu = document.getElementsByClassName(".options-menu");
optionsMenu.addEventListener("mouseleave", removeOptions);