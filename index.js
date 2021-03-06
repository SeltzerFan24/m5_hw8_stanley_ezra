// // Create an Array of at least 3 losing messages
var loseMessage = [
    "You lost. Don't be upset. The stakes are pretty low here.",
    "You didn't win. Try not to let this affect your self-worth.",
    "Sorry for your loss... of this game.",
    "You lost. I'm sure you're great at other things in life though.",
    "I don't want to use the word LOSER here, so instead I'll call you a yet-to-be-winner.",
    "Don't be discouraged because you lost. I once lost a game of basketball and that definitely didn't give me a complex."
];

// // Create variables to count wins and losses
var numberOfWins = 0
var numberOfLosses = 0

// // Create variables that target elements with the following IDs: 'message', 'wins', 'losses'
var wins = document.getElementById('wins')
var losses = document.getElementById('losses')
var message = document.getElementById('message')

// // target all .box elements and attach a click event listener to each one using a loop
// // within each click event...
// // determine which box was clicked with 'this.textContent' or event.target.textContent
// // convert that value to a Number and store it to a variable

var boxes = document.getElementsByClassName('box')

var boxNum = 0

function random_lose_msg () {
    return loseMessage[Math.floor(Math.random()*loseMessage.length)]
  }

for (var i = 0 ; i <boxes.length; i++) {
    boxes[i].addEventListener('click', function (e) {
      winningBox = getRandomNum(1,3)
      boxNum = (parseInt(this.textContent))
      if (boxNum === winningBox) {
          message.textContent = "Congratulations, you've won!";
          numberOfWins++
          wins.textContent = "Number of wins: " +  numberOfWins + " "
      } else {
          var lMessage= random_lose_msg()
          message.textContent = lMessage
          numberOfLosses++
          losses.textContent = "Number of losses: " + numberOfLosses
      }
    })
}

// // create a random number between 1-3 and store it to a variable
// // This number will represent the winning box

function getRandomNum(min = 1, max = 3) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

var winningBox = getRandomNum(1,3)



// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins

// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses
