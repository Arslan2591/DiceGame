function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6 + 1);
  var randomNumber2 = Math.floor(Math.random() * 6 + 1);

  var dice1 = document.querySelector(".img1");
  var dice2 = document.querySelector(".img2");

  dice1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
  dice2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

  var statement = document.querySelector(".container>h1");

  if (randomNumber1 > randomNumber2) {
    statement.innerHTML = "Player 1 Wins";
  } else if (randomNumber2 > randomNumber1) {
    statement.innerHTML = "Player 2 Wins";
  } else {
    statement.innerHTML = "It's a draw 💥";
  }
}
