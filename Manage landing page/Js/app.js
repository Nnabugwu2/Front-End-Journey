let navLinks = document.querySelector("#nav");
let form = document.querySelector(".form");
let openIcon = document.querySelector(".toggle");
//Loader animation function================================================
(function () {
        setTimeout(load, 5000);
})();
function load() {
        document.querySelector(".loader").style.display = "none";
        document.querySelector(".container").style.display = "block";
}

// Stickey Header scrolling effect============================================
window.addEventListener('scroll', function(){
    let header = document.querySelector('header')
    let headerOffset = header.offsetTop;

    if(this.scrollY > headerOffset){
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }
})
// Toggle menu button======================================================================

openIcon.addEventListener('click', function(){
    navLinks.classList.toggle("nav-display");
    document.body.style.overflow = "hidden";
    console.log(navLinks)
    document.querySelector(".close").addEventListener('click', function(){
        navLinks.classList.remove("nav-display");  
        document.body.style.overflow = "auto";
    });
})
//Suscribers email functionality ====================================================
document.querySelector("#subBtn").addEventListener('click', function(){
    let input = document.querySelector("#email");
    let pop = document.querySelector(".email-popUp");
    let txt = document.querySelector("#update-content");
    pop.classList.add("popUp-appear");
    

    if(input.value == ""){
        txt.textContent = "You have not entered any email address!"
        setTimeout(function(){
            pop.classList.remove("popUp-appear");
            console.log(pop)
        }, 4000);
    }
    else if(!validateEmail(email.value) && !(input.value == "")){
        txt.textContent = "Your email address is not valid!"
        setTimeout(function(){
            pop.classList.remove("popUp-appear");
            console.log(pop)
        }, 4000);
    }
    else{
        txt.textContent = "Email submitted successfully, but\n you'll receive no email shortly...lol!";
        setTimeout(function(){
            pop.classList.remove("popUp-appear");
            console.log(pop)
        }, 8000)
    }
   
});
function validateEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}
// currebt active link functionality ==========================================================
let linkContainer = document.querySelector("#ul");
function activeLink(event){
    let activeClass = event.target;
    if(activeClass.classList.contains("li")) {
        let activeLink = linkContainer.querySelector(".active-link");
        if(activeLink){
            activeLink.classList.remove("active-link");
        }
        activeClass.classList.add("active-link");
        navLinks.classList.remove("nav-display");
        // openIcon.style.display = "block";
        document.body.style.overflow = "auto";
    } 
}
linkContainer.addEventListener("click", activeLink);
// signUp form
// document.querySelectorAll("button.reg").addEventListener('click', openForm)
  function openForm() {
    form.classList.add("display-form");
    document.body.style.overflow = "hidden"
    document.querySelector("#close-form").addEventListener('click', closeForm);
  }
function closeForm(){
    form.classList.remove("display-form");
    document.body.style.overflow = "auto";
    console.log("Okay")
}