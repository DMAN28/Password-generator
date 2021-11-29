// event listener to generate button/ assignment Code
document.querySelector("#generate");
addEventListener("click", writePassword);

//create character banks for numbers letters and special characters
var specialCharacters = ["!","#","$","%","^","&","*","(",")","`","=","-","_","+","\:","<",">","?","}","?","{"];
// numeric characters
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9',];
// alphabetical characters
var Lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var Uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// var declaration
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmLowercase;
var confirmUppercase;



//when user clicks generate password button prompt user for length of password
function generatePassword (){
    var confirmLength = (prompt("How many characters would you like the password to have?"));
//while loop in case answer does not fit criteria 
while(confirmLength<= 7 || confirmLength >= 128){
    alert("Password length must be between 8-128 characters");
var confirmLength = (prompt("How many characters would you like you password to contain"));
}

//display length of random characters corresponding to user length parameters
alert(`Your password will have ${confirmLength}characters`);

//determine what parameters are for use later
var confirmSpecialCharacter = confirm("Click ok if you would like to use special characters");
var confirmNumericCharacter = confirm("Click ok if you would like to use numeric characters");
var confirmUppercase = confirm("Click ok if you would like to use uppercase characters");
var confirmLowercase = confirm("Click ok if you would like to use lowercase characters");

// while loop in case answer does not meet criteria
while(confirmLowercase === false && confirmLowercase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
    alert("You must choose at least one parameter");
    var confirmSpecialCharacter = confirm("Click ok if you would like to use special characters");
    var confirmNumericCharacter = confirm("Click ok if you would like to use numeric characters");
    var confirmUppercase = confirm("Click ok if you would like to use uppercase characters");
    var confirmLowercase = confirm("Click ok if you would like to use lowercase characters"); 
} 

// Fix this password parameters
var passwordCharacters = []

if(confirmSpecialCharacter) {
    passwordCharacters = passwordCharacters.concat(specialCharacters)
}

if(confirmNumericCharacter){
    passwordCharacters = passwordCharacters.concat(numbers)
}

if (confirmUppercase){
passwordCharacters = passwordCharacters.concat(Uppercase)
}

if (confirmLowercase){
    passwordCharacters = passwordCharacters.concat(Lowercase)
    }

console.log(passwordCharacters)

//randomly select characters from user selections for password
var randomPassword = ""

for( var i = 0; i <confirmLength; i++){
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
}
return randomPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}