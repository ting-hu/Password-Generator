// Assignment code here
var tempP = "";
var count = 0;
var charLength = null;

var length = function () {
  var promptLength = window.prompt(
    "How many characters would you like to contain"
  );

  if (promptLength <= 128 && promptLength >= 8) {
    if (Number.isInteger(promptLength) === true) {
      charLength = promptLength;
      userPrompt();
    } else {
      window.alert("Need integer");
      return;
    }
  } else if (promptLength < 8) {
    window.alert("Password length mush be at least 8 characters");
    return;
  } else if (promptLength > 128) {
    window.alert("Password length must be no more than 128 characters");
    return;
  } else if (promptLength === null) {
    return;
  } else {
    window.alert("Please insert a number instead");
    return;
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
  var promptChar = window.confirm(
    "Click OK to confirm including special characters."
  );
  var promptNum = window.confirm(
    "Click OK to confirm including numeric characters."
  );
  var promptLowerCase = window.confirm(
    "Click OK to confirm including lowercase characters."
  );
  var prompptUpperCase = window.confirm(
    "Click OK to confirm including uppercase characters."
  );

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

  if (count === 0) {
    window.alert(
      "User input invalidated, you need at least one character type"
    );
    return;
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

  for (var i = 0; i < charLength; i++) {
    finalP = finalP + tempP.charAt(i);
  }

  finalP = shuffleString(finalP);
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
