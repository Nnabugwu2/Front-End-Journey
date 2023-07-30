function loaderTimeout(){
    setTimeout(load, 5000);
};
function load() {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".container").style.display = "block";
}
loaderTimeout();