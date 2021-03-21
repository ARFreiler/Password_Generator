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

// Generate password
function generatePassword() {

  // Continues to prompt user to input a number until it falls between the min./max. requirements.
  var pwLength = parseInt(prompt("Enter a number between 8-128"));
  while (pwLength < 7 || pwLength > 129 || isNaN(pwLength) || pwLength === null) {
    alert("Please enter a valid number between 8-128.");
    pwLength = prompt("Enter a number between 8-128");
  }

  console.log(pwLength);

  // Defines variables that allow the user to determine password character types.
  var confirmLower = confirm("Do you want to include lower case characters?");
  var confirmUpper = confirm("Do you want to include upper case characters?");
  var confirmNumber = confirm("Do you want to include number characters?");
  var confirmSpecial = confirm("Do you want to include special characters?");

  // Continues to prompt user to enter valid character type choice until criteria met.
  while (confirmLower === false && confirmUpper === false && confirmNumber === false && confirmSpecial === false) {
    alert("Please select at least one character type.");
    confirmLower = confirm("Do you want to include lower case characters?");
    confirmUpper = confirm("Do you want to include upper case characters?");
    confirmNumber = confirm("Do you want to include number characters?");
    confirmSpecial = confirm("Do you want to include special characters?");
  }

  console.log(confirmLower);
  console.log(confirmUpper);
  console.log(confirmNumber);
  console.log(confirmSpecial);

  // Defines arrays of different character types.
  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "Y", "V", "W", "X", "Y", "Z"];
  var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

  // Array of user approved characters.
  var passPool = [];

  // Array generated based upon user's responses.
  function generateChar() {
    if (confirmLower) {
      passPool.push(...lower);
    }
    if (confirmUpper) {
      passPool.push(...upper);
    }
    if (confirmNumber) {
      passPool.push(...number);
    }
    if (confirmSpecial) {
      passPool.push(...special);
    }
  }

  generateChar();
  console.log(passPool);

  // var passIndex = Math.floor(Math.random() * passPool.length);
  // var randomPass = passPool[passIndex];

  function pushChar() {
    var randomPassword = [];
    for (let i = 0; i < pwLength; i++) {
      var index = Math.floor(Math.random() * passPool.length);
      console.log(passPool[index]);
      randomPassword.push(item);

    }

  }

}