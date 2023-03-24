// Delcare
var lowerpr;
var upperpr;
var numberpr;
var specialpr;
var options;
var number = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "~", "?" ];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lenpr = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log (generateBtn)


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//Ensure a proper number of characters is chosen
function generatePassword(){
  lenpr=prompt("Choose between 8 and 128 characters for your password.");
  console.log("Password Length " + lenpr);
  
  if(!lenpr){
    prompt("Choose between 8 and 128 characters for your password.");

  } else if (lenpr<8 || lenpr>128){
    lenpr = prompt("Choose between 8 and 128 characters for your password.")
    console.log("Password length " + lenpr);
//Prompts to choose included character types
} else {
  lowerpr = confirm("Would you like to use lower case letters?")
  console.log("Lower case" + lowerpr)
  upperpr = confirm("Would you like to use upper case letters?")
  console.log("Upper case" + upperpr)
  numberpr = confirm("Would you like to use numbers?")
  console.log("Numbers" + numberpr)
  specialpr = confirm("Would you like to use special characters?")
  console.log("Special Charactes" + specialpr)
};
//Checks to make sure at least one character type has been chosen
if(!lowerpr && !upperpr && !numberpr && !specialpr){
  options = alert("You must choose at least one password criteria.");
} 
//bucket for password options
var passwordoptions = []
//adds character options to the bucket
if (specialpr) {
  passwordoptions=passwordoptions.concat(special)
  }
if (numberpr) {
  passwordoptions=passwordoptions.concat(number)
}
if (upperpr) {
  passwordoptions=passwordoptions.concat(upper)
}
if (lowerpr) {
  passwordoptions=passwordoptions.concat(lower)
}
console.log(passwordoptions)

var passwordrandom = ""
// Generate the random password
for (var i=0;i<lenpr;i++){
  passwordrandom = passwordrandom + passwordoptions[Math.floor(Math.random()*passwordoptions.length)];
  console.log(passwordrandom);
}
return passwordrandom
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}