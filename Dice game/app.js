let score,btn, roundScore, dice, activePlayer, myImage, text, gamePlaying, leftActiveClass,rightActiveClass ;
// Below are all the Dom elements I need from my Index.html file
// For image
myImage = document.querySelector("#image");
// for display text
text = document.querySelector("#display-text");
leftActiveClass = document.querySelector(".left");
rightActiveClass = document.querySelector(".right");
btn = document.querySelector(".hidden-btn");

newGame();

// This function below takes care of everything on the Rolling dice btn.
document.querySelector("#roll-dice-btn").addEventListener('click', function(){
  if(gamePlaying){
      // let create what would generate random numbers
      dice = Math.floor(Math.random() * 6) + 1;
      // Lets get the dice image to synchronize  with the random numbers
      myImage.style.display = "block";
      myImage.src = "./images/dice-" + dice + ".png";
      text.textContent = `You got a ${dice}.`
  
     
      if(dice !== 1) {
          // cummulative dice scores
      roundScore += dice;
      document.querySelector("#score-"+ activePlayer).textContent = roundScore;
     
  
      }else{
          nextPlayer()
      }
  }
       
});


document.querySelector("#hold-btn").addEventListener('click', function(){
   if(gamePlaying){
    score[activePlayer] += roundScore;
    document.querySelector("#cummulative-" + activePlayer).textContent = score[activePlayer]; 
   }
    if( score[activePlayer] >= 100 ){
        document.querySelector("#player-" + activePlayer).textContent = "winner!!!";
        gamePlaying = false;
    } else{
        nextPlayer();
    }
   

});
document.querySelector("#new-game-btn").addEventListener('click', function()  {
    document.querySelector("#new-game-btn").textContent = "New Game";
    btn.classList.remove("hidden-btn");
    newGame();
});

function nextPlayer() {
    roundScore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer =0;
    text.textContent = "Next Player's turn!";
    document.querySelector("#score-0").textContent = "0";
    document.querySelector("#score-1").textContent = "0";
    leftActiveClass.classList.toggle("active");
    rightActiveClass.classList.toggle("active");
}

function newGame(){
    score = [0,0];
    roundScore = 0;
    activePlayer = 0;

    gamePlaying = true;
    document.querySelector("#score-0").textContent = "0";
    document.querySelector("#score-1").textContent = "0";
    document.querySelector("#cummulative-0").textContent = "0";
    document.querySelector("#cummulative-1").textContent = "0";
    document.querySelector("#player-0").textContent = "Player 1";
    document.querySelector("#player-1").textContent = "Player 2";
    myImage.style.display = "none";
    leftActiveClass.classList.remove("active");
    rightActiveClass.classList.remove("active");
    leftActiveClass.classList.toggle("active");
    text.textContent = " ";

}
