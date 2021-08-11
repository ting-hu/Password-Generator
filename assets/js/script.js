// Assignment code here
var tempP = "";
var count = 0;
var charLength = null;

var length = function () {
  var promptLength = window.prompt("How many character do you want?");

  if (promptLength <= 128 && promptLength >= 8) {
    charLength = promptLength;
    userPrompt();
  } else {
    window.alert("Please inster a number between 8 to 128");
  }
};

var randomChar = function () {
  var charList = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  return charList[Math.floor(Math.random() * charList.length)];
};

var randomNum = function () {
  return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
};

var randomLowerCase = function () {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
};

var randomUpperCase = function () {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
};

var userPrompt = function () {
  var promptChar = window.confirm("Do you want the special char?");
  var promptNum = window.confirm("Do you want number?");
  var promptLowerCase = window.confirm("Do you want lower case?");
  var prompptUpperCase = window.confirm("Do you want upper case?");

  if (promptChar) {
    count++;
  }

  if (promptNum) {
    count++;
  }

  if (prompptUpperCase) {
    count++;
  }

  if (promptLowerCase) {
    count++;
  }

  for (var i = 0; i < charLength; i += count) {
    if (promptChar) {
      tempP += randomChar();
    } else {
      tempP += "";
    }

    if (promptNum) {
      tempP += randomNum();
    } else {
      tempP += "";
    }

    if (prompptUpperCase) {
      tempP += randomUpperCase();
    } else {
      tempP += "";
    }

    if (promptLowerCase) {
      tempP += randomLowerCase();
    } else {
      tempP += "";
    }
  }
  generatePassword();
};

var generatePassword = function () {
  var finalP = "";

  tempP = shuffleString(tempP);
  console.log(tempP);

  for (var i = 0; i < charLength; i++) {
    finalP = finalP + tempP.charAt(i);
  }

  console.log(finalP);
  return finalP;
};

var shuffleString = function (tempP) {
  var arr = tempP.split("");

  for (var i = 0; i < arr.length - 1; ++i) {
    var j = Math.floor(Math.random() * arr.length);
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  tempP = arr.join("");

  return tempP;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  tempP = "";
  count = 0;
  charLength = null;

  length();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
