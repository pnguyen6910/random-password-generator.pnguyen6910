const cap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const noCap = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const specialCharacters = ["!", "@", "#", "$", "^", "&", "%", "*", "(", ")", "+", "=", "-", "[", "]", "{", "}", "|", ":", "<", ">", "?", ",", ".", ",", ";"]
const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var passLength

var donePass = []

function pwLength() {
  const charCount = parseInt(prompt("Please enter a number 8 - 128"))
  if (isNaN(charCount) === true) {
    alert("Please input a number")
  }
  if (charCount <= 7 || charCount > 128) {
    charCount = parseInt(prompt("please enter a number 8 - 128"))
  }
  passLength = charCount
}

function charSelection() {
  const incNoCap = confirm("Would you like LOWERCASE characters in your password?")
  const incCap = confirm("Would you like UPPERCASE characters in your password?")
  const incNum = confirm("Would you like NUMBERS in your password?")
  const incSymbols = confirm("Would you like SPECIAL characters in your password?")

  if (includeLowerC === false && includeUpperC === false && includenumber === false && includesymbols === false) {
    alert('You need to pick atleast one criteria \n Please try again')
    return;
  }

  var finalChars = {
    incCap: incCap,
    incNoCap: incNoCap,
    incNum: incNum,
    incSymbols: incSymbols
  }
  return finalChars
}

function randomiser() {
  const rng = Math.floor(Math.random() * donePass.length)
  const randomChar = donePass[rng]
  return randomChar
}

function arrayPush(finalChars) {
  var allTheArrays = []
  if (finalChars.includeLowerC === true) {
    for (var i = 0; i < lowerCaseChar.length; i++)
      allTheArrays.push(lowerCaseChar[i])
  }
  if (finalChars.includeUpperC === true) {
    for (var i = 0; i < upperCaseChar.length; i++)
      allTheArrays.push(upperCaseChar[i])
  }
  if (finalChars.includenumber === true) {
    for (var i = 0; i < numericNumber.length; i++)
      allTheArrays.push(numericNumber[i])
  }
  if (finalChars.includesymbols === true) {
    for (var i = 0; i < specialChar.length; i++)
      allTheArrays.push(specialChar[i])
  }
  finalArray = allTheArrays;
}

function getPass() {
  var finalPass = ""
  for (var i = 0; i < passLength; i++) {
    finalPass += randomiser(donePass)
  }
  return finalPass
}

var generateBtn = document.querySelector("#generate")

function writePass() {
  pwLength()
  arrayPush(charSelection())
  var password = getPass()
  var passText = document.querySelector("#password")
  passText.innerText = password
}

generateBtn.addEventListener("click", writePass)