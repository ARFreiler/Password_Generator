// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var pwLength = parseInt(prompt("Enter a number between 8-128"));
  while (pwLength < 7 || pwLength > 129 || isNaN(pwLength) || pwLength === null) {
      alert("Please enter a valid number between 8-128.");
      pwLength = prompt("Enter a number between 8-128");
}

// Define variables that allow the user to determine password character types.
var confirmLower = confirm("Do you want to include lower case characters?");
var confirmUpper = confirm("Do you want to include upper case characters?");
var confirmNumber = confirm("Do you want to include number characters?");
var confirmSpecial = confirm("Do you want to include special characters?");

console.log(pwLength);

 

