// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowercase= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercase= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var letterlength= 26;
var number= ["0","1","2","3","4","5","6","7","8","9"]
var numberLength= 10;
var special= ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var speciallength= 33;
var userChoices= []

function generatePassword(){
var length= prompt ("How many characters do you want your password to be? Choose between 8 and 128.");
var lowercase= confirm ("do you want to include lower case characters?");
var uppercase= confirm ("do you want to include upper case characters?");
var special= confirm ("do you want to include special characters?");
var number= confirm ("do you want to include numbers?");
var lengthint= parseInt(length);

  if (length >8 && length <128){

  for (var i = 0; i < passwordLength; i++) {
    var userChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    console.log(userChoices, lengthint);
}
   
   //01
   if ((uppercase===false)&&(lowercase===false)&&(number===false)&&(special===true)){
     var userChoices = special;
     var userChoiceslength = specialLength;
     console.log(userChoices); 
   }
   //02
   else if ((uppercase===false)&&(lowercase===false)&&(number===true)&&(special===false)){
    var userChoices = number;
    var userChoiceslength = numberLength; 
    console.log(userChoices);
   }
   //03
   else if ((uppercase===false)&&(lowercase===true)&&(number===false)&&(special===false)){
    var userChoices = lowercase;
    var characterlength = letterLength;
    console.log(userChoices);
   }
   //04
   else if ((uppercase===true)&&(lowercase===false)&&(number===false)&&(special===false)){
    var userChoices = uppercase;
    var userChoiceslength = letterLength;
    console.log(userChoices);
   }
   //05
   else if ((uppercase===true)&&(lowercase===true)&&(number===false)&&(special===false)){
     var userChoices = uppercase.concat(lowercase);
     var userChoiceslength = letterlength;
     console.log(userChoices);
   }
   //06
   else if ((uppercase===true)&&(lowercase===false)&&(number===true)&&(special===false)){
    var userChoices = uppercase.concat(number);
    var userChoiceslength = letterlength + numberLength;
    console.log(userChoices);
   }
   //07
   else if ((uppercase===true)&&(lowercase===false)&&(number===false)&&(special===true)){
    var userChoices = uppercase.concat(special);
    var userChoiceslength = letterlength + speciallength;
    console.log(userChoices);
   }
   //08
   else if ((uppercase===true)&&(lowercase===true)&&(number===true)&&(special===false)){
    var userChoices = uppercase.concat(lowercase,number);
    var userChoiceslength = letterlength + numberLength;
    console.log(userChoices);
   }
   //09
   else if ((uppercase===true)&&(lowercase===true)&&(number===true)&&(special===true)){
    var userChoices = uppercase.concat(lowercase,number,special);
    var userChoiceslength = letterlength + numberLength + speciallength;
    console.log(userChoices);
   }
   //10
   else if ((uppercase===false)&&(lowercase===true)&&(number===true)&&(special===false)){
    var userChoices = number.concat(lowercase);
    var userChoiceslength = letterlength + numberLength;
    console.log(userChoices);
   }
   //11
   else if ((uppercase===false)&&(lowercase===true)&&(number===false)&&(special===true)){
    var userChoices = special.concat(lowercase);
    var userChoiceslength = letterlength + speciallength;
    console.log(userChoices);
   }
   //12
   else if ((uppercase===false)&&(lowercase===true)&&(number===true)&&(special===true)){
    var userChoices = number.concat(lowercase,special);
    var userChoiceslength = letterlength + numberLength + speciallength;
    console.log(userChoices);
   }
  //13
   else if ((uppercase===false)&&(lowercase===false)&&(number===true)&&(special===true)){
    var userChoices = number.concat(special);
    var userChoiceslength = numberlength + speciallength;
    console.log(userChoices);
   }
   //14
   else if ((uppercase===true)&&(lowercase===true)&&(number===false)&&(special===true)){
    var userChoices = uppercase.concat (lowercase,special);
    var userChoiceslength = letterlength + speciallength;
    console.log(userChoices);
   }
  }

  else {
    console.log("incorrect option");
    return;
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
