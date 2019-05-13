// Random number for the dice on the left

document.querySelector("button").onclick = function() {

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;

  var randImgLeftDice = "images/dice" + randomNumber1 + ".png";
  document.querySelector(".img1").setAttribute("src", randImgLeftDice);


  //Random number for the dice on the right
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randImgRightDice = "images/dice" + randomNumber2 + ".png";
  document.querySelector(".img2").setAttribute("src", randImgRightDice);


  // win/lose conditions

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h2").innerHTML = "HAHAHA You shall die now";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h2").innerHTML = "You got lucky this time!";
  } else if (randomNumber1 === randomNumber2) {
    document.querySelector("h2").innerHTML = "It's a draw";
  }

} ;
