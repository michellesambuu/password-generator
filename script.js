// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers= [1,2,3,4,5,6,7,8,9,0]
var specialCharcters=[ "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", " ' ", " ", ' " ', "\\" ]
var lowerCase=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var pwLength=0
var result=""
var choices=[]

function generatePassword(){
  while(pwLength<8||pwLength>128||pwLength===""||isNaN(pwLength)){
    pwLength=prompt("Please choose a password length between 8-128 characters")
  }
  var confirmNumbers=confirm("would you like to add numbers to your password?")
  if  (confirmNumbers===true){
choices=choices.concat(numbers)
}
var confirmSpecialCharacters=confirm("would you like to add special charcters to your password?")
  if (confirmSpecialCharacters===true) {
    choices=choices.concat(specialCharcters)
    }
    var confirmlowerCase=confirm("would you like to add lower case to your password")
    if(confirmlowerCase===true){
      choices=choices.concat(lowerCase)
 }
 var confirmupperCase=confirm("would you like to add upper case to your password")
 if(confirmupperCase===true){
  choices=choices.concat(upperCase)}
  
  if(confirmSpecialCharacters===false&&
    confirmNumbers===false&&
    confirmlowerCase===false&&
    confirmupperCase===false){
      alert("You have to choose at least one type of chacters to generate your password")
      window.location.reload()
    }
    for(let i=0; i<pwLength;i++){
      result+=choices[Math.floor(Math.random()*choices.length)]
    }
    return result
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
