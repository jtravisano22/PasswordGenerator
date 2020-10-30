// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength;
var lowerChar; 
var upperChar; 
var numberChar; 
var specialChar; 
var usersChoice; 

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  passwordLength = prompt("Choose a password length between 8 and 128 characters.");
  console.log("Password length " + passwordLength);
  
  if(!passwordLength) {
    alert("Required.");

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Choose between 8 and 128.");
    console.log("Password length " + passwordLength);
  
  } else { 
    lowerChar = confirm("Lowercase letters?");
    console.log("Lower case " + lowerChar);
    upperChar = confirm("Uppercase letters?");
    console.log("Upper case " + upperChar);
    numberChar = confirm("Numbers?");
    console.log("Number " + numberChar);
    specialChar = confirm("Special characters?");
    console.log("Special Character " + specialChar);

  };

  if (!lowerChar && !upperChar && !numberChar && !specialChar) {
    usersChoice = alert("Please choose.");

  } else if (lowerChar && upperChar && numberChar && specialChar) {
    usersChoice = lowerCase.concat(upperCase, numbers, special);
    console.log(usersChoice);
  }
  else if (lowerChar && upperChar && numberChar) {
    usersChoice = lowerCase.concat(upperCase, numbers);
    console.log(usersChoice);
  }
  else if (lowerChar && upperChar && specialChar) {
    usersChoice = lowerCase.concat(upperCase, special);
    console.log(usersChoice);
  }
  else if (lowerChar && numberChar && specialChar) {
    usersChoice = lowerCase.concat(numbers, special);
    console.log(usersChoice);
  }
  else if (upperChar && numberChar && specialChar) {
    usersChoice = upperCase.concat(numbers, special);
    console.log(usersChoice);
  }
  else if (lowerChar && upperChar) {
    usersChoice = lowerCase.concat(upperCase);
    console.log(usersChoice);
  }
  else if (lowerChar && numberChar) {
    usersChoice = lowerCase.concat(numbers);
    console.log(usersChoice);
  }
  else if (lowerChar && specialChar) {
    usersChoice = lowerCase.concat(special);
    console.log(usersChoice);
  }
  else if (upperChar && numberChar) {
    usersChoice = upperCase.concat(numbers);
    console.log(usersChoice);
  }
  else if (upperChar && specialChar) {
    usersChoice = upperCase.concat(special);
    console.log(usersChoice);
  }
  else if (numberChar && specialChar) {
    usersChoice = numbers.concat(special);
    console.log(usersChoice);
  }
  else if (lowerChar) {
    usersChoice = lowerCase;
    console.log(usersChoice);
  }
  else if (upperChar) {
    usersChoice = blankUpper.concat(upperCase);
    console.log(usersChoice);
  }
  else if (numberChar) {
    usersChoice = numbers;
    console.log(usersChoice);
  }
  else if (confirmSpecial) {
    usersChoice = special;
    console.log(usersChoice);
  };

  var passwordBlank = [];
  
  for (var i = 0; i < passwordLength; i++) {
    var allChoices = usersChoice[Math.floor(Math.random() * usersChoice.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }

  var password = passwordBlank.join("");
  console.log("Your Password is: " + password);
  return password;
  
}