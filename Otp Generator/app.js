//Otp Generator
let copyBtn = document.querySelector("#btn2");
let otp;
document.querySelector("#btn").addEventListener('click', function(){
    otp = "";
    for(i = 0; i < 4; i++){
        otp += Math.floor(Math.random() * 6) + 1;
    }
    document.querySelector("#otpDisplay").textContent = otp;
    copyBtn.style.display = "block";
    copyBtn.textContent = "Copy Otp"
   return otp;
   
});
copyBtn.addEventListener('click', function() {
    const textToCopy = otp;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        // copyBtn.textContent = "Copied!"
      })
      .catch((error) => {
        console.error('Error copying text to clipboard:', error);
      });

      let notification = document.querySelector("#notify");
      notification.style.display = "block";
      notification.style.background = "linear-gradient(to bottom left," 
      +color1.value +"," + color2.value + ")";
      notification.style.opacity ="0.5"

     
      

      setTimeout(function(){
        notification.style.display ="none";
      }, 1000)
      
  });
  
  
function backgroundChanger(){
    let color1, color2;
    color1 = document.querySelector("#color1");
    color2 = document.querySelector("#color2");
    container = document.querySelector(".container");
    btnBackground = document.querySelector("#btn");
    title = document.querySelector("#title");
    para1 = document.querySelector("#para");
    para2 = document.querySelector("#para1");
    otpDisplay = document.querySelector("#otpDisplay");



    copyBtn.style.background = "linear-gradient(to bottom left," 
    +color1.value +"," + color2.value + ")";

    container.style.background = "linear-gradient(to bottom left," 
    +color1.value +"," + color2.value + ")";

    btnBackground.style.background = "linear-gradient(to bottom left," 
    +color1.value +"," + color2.value + ")";

    title.style.color = color1.value;
    para1.style.color = color2.value;
    para2.style.color = color2.value;
    otpDisplay.style.color = color1.value;
   

}

color1.addEventListener('input', backgroundChanger);
color2.addEventListener('input', backgroundChanger);
