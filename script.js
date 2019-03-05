const idBtnChangeColor = document.getElementById("btn-change-color");
const idToggleChangeBackground = document.getElementById("toggle-change-color");
const titleText = document.getElementById("title-text");
let upValue = 0, x;

// create element with JS
const addNewButton = document.createElement("button");
const addNewTeks = document.createTextNode("New Change Color");
addNewButton.appendChild(addNewTeks);
addNewButton.setAttribute('type', 'button');
document.getElementsByTagName("h1")[2].after(addNewButton);
document.getElementsByTagName("button")[2].classList.add("btn-cursor");

const changeColor = idBtnChangeColor.addEventListener("click", function(){
    upValue = upValue+1;
    x = upValue % 2;
    if(x == 1) {
        titleText.style.color = "salmon";
    } else {
        titleText.style.color = "#000";
    }
});

const changeBackgroundColor = idToggleChangeBackground.addEventListener("click", function(){
    document.getElementsByClassName("card")[1].classList.toggle("background-salmon");
});

// random background-color
addNewButton.addEventListener("click", function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.getElementsByClassName("card")[2].style.backgroundColor = "rgb("+r+", "+g+", "+b+")";
});