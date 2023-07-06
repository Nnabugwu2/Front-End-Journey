let colorOne, colorTwo,hiddenDiv, container, display,btn;

colorOne = document.querySelector("#color1");
colorTwo = document.querySelector("#color2");
container = document.querySelector(".container");
display = document.querySelector("#generatedColor");
//btn = document.querySelector("#btnn");
hiddenDiv = document.querySelector(".last");

function changeBg(){
    container.style.background = "linear-gradient(to bottom left, " 
    + colorOne.value 
    +"," 
    + colorTwo.value 
    + ")";
    hiddenDiv.style.display = "flex";
    display.textContent = container.style.background;

}

colorOne.addEventListener('input',changeBg )
colorTwo.addEventListener('input', changeBg );  