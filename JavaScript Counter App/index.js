let count = 0;
let  counterText = document.getElementById("counter")
let  notifyText = document.getElementById("notify")
   let ghost = document.getElementById("notification")


function increment() {
   count = count + 1
   counterText.innerText = count
}
function decrement() {
   count = count - 1
   counterText.innerText = count

   if(count <= -1) {
      window.confirm("Click on the add button to purchase a ticket");
      counterText.innerText = 0
      count = 0
   }

}  

function alerting() {
   
   notifyText =  "Added" + " " + count + " Tickets to " + " Cart."
   notify.innerText = notifyText
  
   empty();
 
   

counterText.innerText = 0
count = 0

}
function empty() {
   if(count <= 0) {
     // notify.innerText = "You have added nothing to your cart"
      window.alert("No tickets added.");
      notify.innerText = "Cart Empty"
      if(notify.innerText = "Cart Empty"){
         alert("Oga add Ticket Abeg! ")
      }
      else{

      }
   }
}
