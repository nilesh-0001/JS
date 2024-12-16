// Write a JavaScript program to generate a random number and store it in a variable . This Program is gonna take an input from the user to tell them whether the guess was correct , greater or lesser than the orignal number . 100 - (no. of Guesses) is the score of the user ,The program is exppected to be terminated once the number is guessed , Number should be between 1 - 100 .
// Eventually after the game is over , display the (100 - No. of chances ) amd the actuall no. also .

const randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;

const playGame = () =>{
  let guess = parseInt(prompt("Guess a number between 1 and 100:"));
  guessCount++;

  if (guess === randomNumber) {
    alert(`Congratulations! You guessed the number in ${guessCount} tries. Your score is ${100 - guessCount}`);
  } else if (guess < randomNumber) {
    alert("Too low! Try again.");
    playGame();
  } else {
    alert("Too high! Try again.");
    playGame();
  }
};

playGame();

// Issue [You can also add alphabet as an input in this function ]