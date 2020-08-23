// Assignment code here

// Prompt to select password criteria

    //validate and choose a character

// Prompt for length of password (between 8 and 128 characters)

    //validate and choose a character

// Prompt for character types to include

    //validate and choose a character

// Generate password in alert or on page


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
