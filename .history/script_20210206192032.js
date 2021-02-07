const cap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const noCap = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const specialCharacters = ["!","@","#","$","^","&","%","*","(",")","+","=","-","[","]","{","}","|",":","<",">","?",",",".",",",";"]
const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const upperQ
const lowerQ
const numQ
const specialQ
const userA
const donePass = []

const generateBtn = document.querySelector("#generate")


writePassword => {
  const password = generatePassword()
  const passText = document.querySelector("Your Secure Password")

  passText.value = password
}

generateBtn.addEventListener("click", writePassword())

generatePassword => {
  const firstPrompt = parseInt(prompt("Please select a number between 8 and 128"))

  if (!firstPrompt) {
    alert("You must pick a number between 8 and 128")
    const cancel = comfirm("Would you like to cancel?")
    if (cancel === false) {
      return
    }else {
    generatePassword()
    }
  } else if (firstPrompt < 8 || firstPrompt > 128) {
    alert("You must pick a number between 8 and 128")
    const cancel = confirm("Would you like to cancel?")
    if (cancel === false) {
      return
    } else {
    generatePassword()
    }
  } else {
    askCap => {
      const askCapP = prompt("Would you like to add capitalized letters to the password? Y/N")
      upperQ = askCapP.toLocaleLowerCase()
      if (askCapP != "y" && askCapP != "n") {
        alert("Please enter Y or N")
        askCap()
      }
    }
    askNoCap => {
      const askNoCapP = prompt("Would you like to add lowercase letters to the password? Y/N")
      upperQ = askNoCapP.toLocaleLowerCase()
      if (askNoCapP != "y" && askNoCapP != "n") {
        alert("Please enter Y or N")
        askNoCap()
      }
    }
    askNum => {
      const askNumP = prompt("Would you like to add numbers to the password? Y/N")
      upperQ = askNumP.toLocaleLowerCase()
      if (askNumP != "y" && askNumP != "n") {
        alert("Please enter Y or N")
        askNum()
      }
    }
    askSpecial => {
      const askSpeP = prompt("Would you like to add special characters to the password? Y/N")
      upperQ = askSpeP.toLocaleLowerCase()
      if (askSpeP != "y" && askSpeP != "n") {
        alert("Please enter Y or N")
        askSpecial()
      }
    }
    askCap()
    askNoCap()
    askNum()
    askSpecial()
  }

}