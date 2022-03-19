const optionsButton = document.querySelector("#options_icon");
const hiddenMenu = document.querySelector(".hidden-menu");

optionsButton.onclick = function showOptions() {
    hiddenMenu.classList.add("options-menu");
    hiddenMenu.innerHTML = `<div class="topic">
        <div class="menu-heading">
            <img src="/images/Controller.png"></img>
            <h3>Games</h3>
        </div>
        <ul>
             <li><a href="../newgames.html">Buy New Games</a></li>
            <li><a href="../usedgames.html">Buy Used Games</a></li>
            <li><a href="../preorder.html">Pre-Order Games</a></li>
            <li><a href="../sellgames.html">Sell Your Games</a></li>
        </ul>
    </div>
    <div class="topic">
        <a href="../contact.html">
            <div class="menu-heading">
                <img src="/images/Mail-icon.png"></img>
                <h3>Contact us</h3>
            </div>
        </a>
        <ul>
            <li>Service@GameHub.com</li>
            <li>+1234567890</li>
        </ul>
    </div>`

    if (hiddenMenu.classlist.length === 2) {
        hiddenMenu.classList.remove("options-menu");
        hiddenMenu.innerHTML = "";
    }
};

