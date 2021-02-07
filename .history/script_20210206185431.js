const cap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const noCap = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const specialCharacters = ["!","@","#","$","^","&","%","*","(",")","+","=","-","[","]","{","}","|",":","<",">","?",",",".",",",";"]
const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const upperQ
const lowerQ
const numQ
const specialQ
const userA
const donePass 

const generateBtn = document.querySelector("#generate")


writePassword => {
  const password = generatePassword()
  const passText = document.querySelector("Your Secure Password")

  passText.value = password
}

generateBtn.addEventListener("click", writePassword())