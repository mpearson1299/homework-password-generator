var generateBtn = document.querySelector("#generate");
var textArea = document.querySelector("#password");

function generatePassword () {
    var upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCaseSet = "abcdefghijklmnopqrstuvwxyz";
    var numberSet = "1234567890";
    var specialSet = "!@#$%^&*()_+";

    var selectedSet = "";

    console.log("Generating the password!");
    // GET USER INPUT
    var passwordLength = prompt("What is the length of the password?")

    var hasUpperCase = confirm("Should the password contain uppercase characters?");
    var hasLowerCase = confirm("Should the passwprd contain lowercase characters?");
    var hasNumbers = confirm("Should the password contain numbers?");
    var hasSpecialCharacters = confirm("should the password contain special characters?");

    // GENERATE SET BASED ON USER INPUT

    if(hasUpperCase) {
        selectedSet = selectedSet + upperCaseSet;
    }
    if(hasLowerCase) {
        selectedSet = selectedSet + lowerCaseSet;
    }
    if(hasNumbers) {
        selectedSet = selectedSet + numberSet;
    }
    if(hasSpecialCharacters) {
        selectedSet = selectedSet + specialSet;
    }

    // GENERATE RANDOM PASSWORD
    var password = "";

    for(i = 0; i < passwordLength; i++) {
        var randomCharacter = selectedSet[Math.floor(Math.random() * selectedSet.length)];
        password = password + randomCharacter;
    }

    return password;
}

function writePassword () {
    textArea.value = generatePassword();

    
}

// add event listener to generate button
generateBtn.addEventListener("click", writePassword)


