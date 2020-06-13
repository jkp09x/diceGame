function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function getWinner() {
  var p1 = rollDice();
  var p2 = rollDice();

  console.log("(" + p1 + ", " + p2 + ")");

  for (var i = 1; i <= 6; i++) {
    // Show only the roll and hide all other dices for player 1
    if (p1 === i) {
      document.body.getElementsByClassName("p1")[i-1].classList.remove("hide")
    } else {
      document.body.getElementsByClassName("p1")[i-1].classList.add("hide")
    }

    // Show only the roll and hide all other dices for player 2
    if (p2 === i) {
      document.body.getElementsByClassName("p2")[i-1].classList.remove("hide")
    } else {
      document.body.getElementsByClassName("p2")[i-1].classList.add("hide")
    }
  }

  announceWinner(p1, p2);
}

function announceWinner(p1, p2) {
  document.body.getElementsByClassName("welcome")[0].classList.add("hide")
  // Draw
  if (p1 === p2) {
    document.body.getElementsByClassName("draw")[0].classList.remove("hide")
    document.body.getElementsByClassName("p1w")[0].classList.add("hide")
    document.body.getElementsByClassName("p2w")[0].classList.add("hide")
  }
  // Player 1 wins
  else if (p1 > p2) {
    document.body.getElementsByClassName("draw")[0].classList.add("hide")
    document.body.getElementsByClassName("p1w")[0].classList.remove("hide")
    document.body.getElementsByClassName("p2w")[0].classList.add("hide")
  }
  // Player 2 wins
  else {
    document.body.getElementsByClassName("draw")[0].classList.add("hide")
    document.body.getElementsByClassName("p1w")[0].classList.add("hide")
    document.body.getElementsByClassName("p2w")[0].classList.remove("hide")
  }
}
