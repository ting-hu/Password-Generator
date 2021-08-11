// Assignment code here
var finalPassword = [];

var length = function () {
  var promptLength = window.prompt("How many character do you want?");

  if (promptLength <= 128 && promptLength >= 8) {
    userPrompt();
  } else {
    window.alert("Please inster a number between 8 to 128");
  }
};

/*var specialChar = function () {
  var promptChar = window.confirm("Do you want the special char?");
  if (promptChar) {
    numerical();
  }
};*/

var randomChar = function () {
  var charList = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  return charList[Math.floor(Math.random() * charList.length)];
};

/*var numerical = function () {
  var promptNum = window.confirm("Do you want number?");
  if (promptNum) {
    lowerCase();
  }
};*/

var randomNum = function () {
  return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
};

/*var lowerCase = function () {
  var promptLowerCase = window.confirm("Do you want lower case?");
  if (promptLowerCase) {
    upperCase();
  }
};*/

var randomLowerCase = function () {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
};

/*var upperCase = function () {
  var prompptUpperCase = window.confirm("Do you want upper case?");
  if (prompptUpperCase) {
    generatePassword();
  }
};*/

var randomUpperCase = function () {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
};

var userPrompt = function () {
  var promptChar = window.confirm("Do you want the special char?");
  if (promptChar) {
    finalPassword.push(randomChar());
  }

  var promptNum = window.confirm("Do you want number?");
  if (promptNum) {
    finalPassword.push(randomNum());
  }

  var promptLowerCase = window.confirm("Do you want lower case?");
  if (promptLowerCase) {
    finalPassword.push(randomUpperCase());
  }

  var prompptUpperCase = window.confirm("Do you want upper case?");
  if (prompptUpperCase) {
    finalPassword.push(randomLowerCase());
  }

  /*for (var i = 0; i < 2; i++) {
    if (promptChar) {
      finalPassword.push(randomChar());
    }
    if (promptNum) {
      finalPassword.push(randomNum());
    }
    if (promptLowerCase) {
      finalPassword.push(randomUpperCase());
    }
    if (prompptUpperCase) {
      finalPassword.push(randomLowerCase());
    }
  }*/
  generatePassword();
};

var generatePassword = function () {
  /*let finalPassword = [];

  //finalPassword.push(randomNum());
  for (let i = 0; i < 3; i++) {
    finalPassword.push(randomChar());
    finalPassword.push(randomLowerCase());
    finalPassword.push(randomUpperCase());
    finalPassword.push(randomNum());
  }*/

  shuffleArray(finalPassword);
  console.log(finalPassword);
};

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    // Generate random number
    var j = Math.floor(Math.random() * (i + 1));

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  length();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
