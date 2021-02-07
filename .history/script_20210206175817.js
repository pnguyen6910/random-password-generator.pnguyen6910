const generate = document.querySelector("#generate")
const error = document.querySelector("#error")
const password = document.querySelector("#password")

const cap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const noCap = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "+", "~"]
const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

writePassword => {
  const characterCount = parseInt(prompt("How many characters would you like in your password? (8 - 128)"))

  if (characterCount < 7 || characterCount > 128) {
    alert("Password should be between 8 and 128 characters. Please try again.")
  } else (characterCount >= 8 && characterCount <= 128) {
    let finalPass = []
    const includeNoCap = promt("What is your mother's maiden name? (LOWER CASE LETTERS)")
    const includeCap = prompt("What is the name of your first pet? (ALL CAPS)")
    const includeSpecialchars = prompt("Please enter a special character.")
    const numIncluded = prompt("Please enter some numbers.")


  }
}