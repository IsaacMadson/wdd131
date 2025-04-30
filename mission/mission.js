let theme = document.querySelector("select");
let logo = document.querySelector("img");

theme.addEventListener("change", changeTheme);

function changeTheme() {
    let current = theme.value;
    if (current == "dark"){ 
        document.body.className = 'dark';
        logo.src = "byui-logo_white.png";

    } else {
        document.body.className = '';
        logo.src = "byui-logo_blue.webp";
    
    }



}