// Import the inquirer library, which allows us to prompt the user for input
import inquirer from "inquirer";

// Generate a random number between 1 and 8
const randomNumber = Math.floor(Math.random() * 8 + 1);

// Print a welcome message to the console
console.log("Welcome To Number Guessing Game");

// Use inquirer to prompt the user to guess a number
const result = await inquirer.prompt([
  {
    // The name of the prompt, which will be used to access the user's response
    name: "guessingGame",
    // The type of input we expect from the user (in this case, a number)
    type: "number",
    // The message to display to the user
    message: "please guess a number between 1 to 8 :-",
  }
]);

// Check if the user's guess matches the random number
if (result.guessingGame === randomNumber) {
  // If the guess is correct, print a congratulatory message
  console.log("Congrats your Guess is right");
} else {
  // If the guess is incorrect, print an error message and reveal the correct answer
  console.log("You guessed a wrong number, Try Again!");
  console.log(`The number is ${randomNumber} `);
}