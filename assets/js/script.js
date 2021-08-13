// Assignment code here
var tempP = "";
var count = 0;
var charLength = null;
const MAX_PWD_LENGTH = 128;
const MIN_PWD_LENGTH = 8;
const DIVIDER = 2;
const ASCII_DIFF_ONE = 48;
const ASCII_DIFF_TWO = 65;
const ASCII_DIFF_THREE = 97;
const NUMBER_RANGE = 10;
const LETTER_RANGE = 26;

/**
 * This function is used to get user input for the length of the password
 * and make sure the input is valid.
 * @returns
 */
var length = function () {
  var promptLength = window.prompt(
    "How many characters would you like to contain"
  );

  if (promptLength <= MAX_PWD_LENGTH && MIN_PWD_LENGTH >= 8) {
    //Check if the user input is an integer between the range or not
    if (promptLength % DIVIDER === 1 || promptLength % DIVIDER === 0) {
      charLength = promptLength;
      userPrompt();
    } else {
      window.alert("Password needs to be an integer");
      return;
    }
  } else if (promptLength < MIN_PWD_LENGTH) {
    window.alert("Password length mush be at least 8 characters");
    return;
  } else if (promptLength > MAX_PWD_LENGTH) {
    window.alert("Password length must be no more than 128 characters");
    return;
  } else if (promptLength === null) {
    return;
  } else {
    window.alert("Please insert a number instead");
    return;
  }
};

/**
 * This function is to return a speical character randomly.
 * @returns Randomized special character.
 */
var randomChar = function () {
  var charList = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  return charList[Math.floor(Math.random() * charList.length)];
};

/**
 * This function is to return a numeric character randomly.
 * @returns Randomized numeric character.
 */
var randomNum = function () {
  return String.fromCharCode(
    Math.floor(Math.random() * NUMBER_RANGE + ASCII_DIFF_ONE)
  );
};

/**
 * This function is to return a lowercase character randomly.
 * @returns Randomized lowercase character.
 */
var randomLowerCase = function () {
  return String.fromCharCode(
    Math.floor(Math.random() * LETTER_RANGE + ASCII_DIFF_THREE)
  );
};

/**
 * This function is to return a uppwercase character randomly.
 * @returns Randomized uppercase character.
 */
var randomUpperCase = function () {
  return String.fromCharCode(
    Math.floor(Math.random() * LETTER_RANGE + ASCII_DIFF_TWO)
  );
};

/**
 * This function is to prompt the user selection for the different character
 * types and make sure the generated password has the corresponded character
 * types.
 * @returns
 */
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

/**
 * This function is to select the corresponded length of password from the
 * tempP and shuffle the password for a higher security.
 * @returns Final password.
 */
var generatePassword = function () {
  var finalP = "";

  for (var i = 0; i < charLength; i++) {
    finalP = finalP + tempP.charAt(i);
  }

  finalP = shuffleString(finalP);
  console.log(finalP);
  return finalP;
};

/**
 * This function is to shuffle the password by spliting the string into array
 * and join back to the string.
 * Credit: https://www.codespeedy.com/shuffle-characters-of-a-string-in-javascript/
 * @param {*} password
 * @returns Shuffled password.
 */
var shuffleString = function (password) {
  var arr = password.split("");

  for (var i = 0; i < arr.length - 1; ++i) {
    var j = Math.floor(Math.random() * arr.length);
    var password = arr[i];
    arr[i] = arr[j];
    arr[j] = password;
  }
  password = arr.join("");

  return password;
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
