// event listener to generate button/ assignment Code
document.querySelector("#generate");
addEventListener("click", writePassword);

//create character banks for numbers letters and special characters
var specialCharacters = ["!","#","$","%","^","&","*","(",")","`","=","-","_","+","\:","<",">","?","}","?","{"];
// numeric characters
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9',];
// alphabetical characters
var lettersUpper = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


//when user clicks generate password button prompt user for length of password
function generatePassword (){
    var confirmLength = (prompt("How many characters would you like the password to have?"));
}
//while loop in case answer does not fit criteria 
while(confirmLength<= 7 || confirmLength >= 128){
    alert("Password length must be between 8-128 characters");
var confirmLength = (prompt("How many characters would you like you password to contain"));
}

//display length of random characters corresponding to user length parameter
alert(`Your password will have ${confirmLength}characters`);

//determine what parameters are for use later
var confirmSpecialCharacter = confirm("Click ok if you would like to use special characters")

//randomly select characters from user selections for password and store them




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




