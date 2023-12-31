// loading function
let myLoad;
function loadLoader() {
  myLoad = setTimeout(load, 5000);
}
function load() {
  document.querySelector(".load-con").style.display = "none";
  document.querySelector(".body").style.display = "block";
}

// Toggle Menu Event handler
let popUp = document.querySelector(".pop-container");
let submitBtn = document.querySelector("#submit");
let userName, userId, email;

popUp.style.display = "none";

function popFunction() {
  popUp.style.display = "block";
  document.body.style.overflow = "hidden";

  userName = document.querySelector("#span");
  userId = document.querySelector("#username");
  email = document.querySelector("#email");

  submitBtn.addEventListener("click", function () {
    let input = document.getElementById("username");
    input.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        submitBtn.style.background = "black";
      }
    });

    if (userId.value !== "" && email.value !== "") {
      if (!validateEmail(email.value)) {
        document.querySelector("#notify").textContent =
          "Please enter a valid email address.";
        return; // Prevent submitting if email is invalid
      }

      userName.textContent = userId.value;
      document.querySelector("#notify").textContent =
        "Your request has been sent, check your email.";

      submitBtn.style.display = "none";
      userId.style.display = "none";
      email.style.display = "none";
    } else {
      document.querySelector("#notify").textContent =
        "Please enter your full name and email to make a request!";
    }
    document.body.style.overflow = "auto";
  });
}

function validateEmail(email) {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

function resetPopUp() {
  userName.textContent = "Customer";
  submitBtn.style.display = "block";
  userId.style.display = "block";
  email.style.display = "block";
  document.querySelector("#notify").textContent =
    "You are about to request for an Invite, kindly enter your email below to send a request";
  userId.value = userId.defaultValue;
  email.value = "";
}

// Pop-up close button
document.querySelector(".close").addEventListener("click", function () {
  popUp.style.display = "none";
  document.body.style.overflow = "auto";
  resetPopUp();
});

document.querySelector(".toggle").addEventListener("click", function () {
  // Set body overflow to "hidden"
  // document.body.style.overflow = "hidden";
  let navBar = document.querySelector(".nav-container");
  navBar.classList.toggle("nav-display");

  let first = document.querySelector(".first");
  first.classList.toggle("active");

  let second = document.querySelector(".second");
  second.classList.toggle("active");

  let third = document.querySelector(".third");
  third.classList.toggle("active");
});

let linksContainer = document.querySelector("ul");
function activeLink(event) {
  let clickedLink = event.target;
  if (clickedLink.classList.contains("li")) {
    let activeLink = linksContainer.querySelector(".active");
    if (activeLink) {
      activeLink.classList.remove("active");
    }
    clickedLink.classList.add("active");

    // Close the toggle
    let navBar = document.querySelector(".nav-container");
    navBar.classList.remove("nav-display");

    let first = document.querySelector(".first");
    first.classList.remove("active");

    let second = document.querySelector(".second");
    second.classList.remove("active");

    let third = document.querySelector(".third");
    third.classList.remove("active");

    document.body.style.overflow = "auto"; // Reset body overflow to "auto"
  }
}

linksContainer.addEventListener("click", activeLink);

// Pop-up close button
document.querySelector(".close").addEventListener("click", function () {
  let popUp = document.querySelector(".pop-container");
  let submitBtn = document.querySelector("#submit");
  let userName = document.querySelector("#span");
  let userId = document.querySelector("#username");
  let email = document.querySelector("#email");

  popUp.style.display = "none";
  document.body.style.overflow = "auto"; // Reset body overflow to "auto"

  userName.textContent = "Customer";
  submitBtn.style.display = "block";
  userId.style.display = "block";
  email.style.display = "block";

  userId.value = "";
  email.value = "";
});

// Sticky header event handler
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let headerOffset = header.offsetTop;

  if (this.scrollY > headerOffset) {
    header.classList.add("sticky");
    header.style.boxShadow = "2px 1px 5px black";
  } else {
    header.classList.remove("sticky");
    header.style.boxShadow = "none";
  }
});
// signUp form
document.querySelector("#reg").addEventListener('click', function(){
  let form = document.querySelector(".form");

  form.classList.toggle("display-form");
  console.log(form)

})