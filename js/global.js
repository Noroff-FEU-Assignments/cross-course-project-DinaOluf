const optionsButton = document.querySelector("#options_icon");
const hiddenMenu = document.querySelector("#hidden-menu");

optionsButton.onclick = function showOptions() {
    const menuClassList = hiddenMenu.classList;

    if (menuClassList.length === 1) {
        menuClassList.remove("options-menu");
        hiddenMenu.innerHTML = "";
    } else {
        hiddenMenu.classList.add("options-menu");
        addMenuHtml();
    }
};

function addMenuHtml() {
    if(window.innerWidth > 1600) {
        hiddenMenu.innerHTML = `<div class="topic">
    <div class="menu-heading">
        <img src="/images/Controller.png" alt="Gaming controller icon"></img>
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
            <img src="/images/Mail-icon.png" alt="Mail icon"></img>
            <h3 class="menu-contact-heading">Contact us</h3>
        </div>
    </a>
    <ul>
        <li>Service@GameHub.com</li>
        <li>+1234567890</li>
    </ul>
</div>`
    }

if(window.innerWidth <= 1600) {
    hiddenMenu.innerHTML = `<div class="topic">
    <div class="menu-heading">
        <img src="/images/Controller.png" alt="Gaming controller icon"></img>
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
    <a href="../account.html" class="menu-heading">
        <img src="/images/Account-icon-link.png" alt="Account icon" class="account-image-menu">
        <h3 class="account-header-menu">My Account</h3>
    </a>
</div>
<div class="topic">
    <a href="../contact.html">
        <div class="menu-heading">
            <img src="/images/Mail-icon.png" alt="Mail icon"></img>
            <h3 class="menu-contact-heading">Contact us</h3>
        </div>
    </a>
    <ul>
        <li>Service@GameHub.com</li>
        <li>+1234567890</li>
    </ul>
</div>`
}
}