const idBtnChangeColor = document.getElementById("btn-change-color");
const idToggleChangeBackground = document.getElementById("toggle-change-color");
const titleText = document.getElementById("title-text");
let upValue = 0, x;

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