// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowercaseCha= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercaseCha= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var letterlength= 26;
var numberCha= ["0","1","2","3","4","5","6","7","8","9"]
var numberLength= 10;
var specialCha= ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var speciallength= 33;
var userChoices= []
var password = ""

function generatePassword() {
  var length = prompt("How many characters do you want your password to be? Choose between 8 and 128.");
  var lowercase = confirm("do you want to include lower case characters?");
  var uppercase = confirm("do you want to include upper case characters?");
  var special = confirm("do you want to include special characters?");
  var number = confirm("do you want to include numbers?");
  var lengthint = parseInt(length);
  if (length > 8 && length < 128) {

    //01
    if ((uppercase === false) && (lowercase === false) && (number === false) && (special === true)) {
      userChoices = specialCha;
      var userChoiceslength = specialLength;
      console.log(userChoices);
    }
    //02
    else if ((uppercase === false) && (lowercase === false) && (number === true) && (special === false)) {
      userChoices = numberCha;
      var userChoiceslength = numberLength;
      console.log(userChoices);
    }
    //03
    else if ((uppercase === false) && (lowercase === true) && (number === false) && (special === false)) {
      userChoices = lowercaseCha;
      var characterlength = letterLength;
      console.log(userChoices);
    }
    //04
    else if ((uppercase === true) && (lowercase === false) && (number === false) && (special === false)) {
      userChoices = uppercaseCha;
      var userChoiceslength = letterLength;
      console.log(userChoices);
    }
    //05
    else if ((uppercase === true) && (lowercase === true) && (number === false) && (special === false)) {
      userChoices = uppercaseCha.concat(lowercaseCha);
      var userChoiceslength = letterlength;
      console.log(userChoices);
    }
    //06
    else if ((uppercase === true) && (lowercase === false) && (number === true) && (special === false)) {
      userChoices = uppercaseCha.concat(numberCha);
      var userChoiceslength = letterlength + numberLength;
      console.log(userChoices);
    }
    //07
    else if ((uppercase === true) && (lowercase === false) && (number === false) && (special === true)) {
      userChoices = uppercaseCha.concat(specialCha);
      var userChoiceslength = letterlength + speciallength;
      console.log(userChoices);
    }
    //08
    else if ((uppercase === true) && (lowercase === true) && (number === true) && (special === false)) {
      userChoices = uppercaseCha.concat(lowercaseCha, numberCha);
      var userChoiceslength = letterlength + numberLength;
      console.log(userChoices);
    }
    //09
    else if ((uppercase === true) && (lowercase === true) && (number === true) && (special === true)) {
      userChoices = uppercaseCha.concat(lowercaseCha, numberCha, specialCha);
      var userChoiceslength = letterlength + numberLength + speciallength;
      console.log(userChoices);
    }
    //10
    else if ((uppercase === false) && (lowercase === true) && (number === true) && (special === false)) {
      userChoices = numberCha.concat(lowercaseCha);
      var userChoiceslength = letterlength + numberLength;
      console.log(userChoices);
    }
    //11
    else if ((uppercase === false) && (lowercase === true) && (number === false) && (special === true)) {
      userChoices = specialCha.concat(lowercaseCha);
      var userChoiceslength = letterlength + speciallength;
      console.log(userChoices);
    }
    //12
    else if ((uppercase === false) && (lowercase === true) && (number === true) && (special === true)) {
      userChoices = numberCha.concat(lowercaseCha, specialCha);
      var userChoiceslength = letterlength + numberLength + speciallength;
      console.log(userChoices);
    }
    //13
    else if ((uppercase === false) && (lowercase === false) && (number === true) && (special === true)) {
      userChoices = numberCha.concat(specialCha);
      var userChoiceslength = numberlength + speciallength;
      console.log(userChoices);
    }
    //14
    else if ((uppercase === true) && (lowercase === true) && (number === false) && (special === true)) {
      userChoices = uppercaseCha.concat(lowercaseCha, specialCha);
      var userChoiceslength = letterlength + speciallength;
      console.log(userChoices);
    }
    for (var i = 0; i < length; i++) {
      password += userChoices[Math.floor(Math.random() * userChoices.length)];
    }
  } else {
    console.log("incorrect option");
    return;
  }
  return password;
 }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
