const characterRange = document.getElementById('slider')
const characterNumber = document.getElementById('numInput')
const form = document.getElementById('form')
const includeUppercase = document.getElementById('includeUppercase')
const includeNumbers = document.getElementById('includeNumbers')
const includeSpecialCharacters = document.getElementById('includeSpecialCharacters')
const password = document.getElementById('password')

//slider sync
characterNumber.addEventListener('input', syncCharacterAmount)
characterRange.addEventListener('input', syncCharacterAmount)

function syncCharacterAmount(e) {
  const value = e.target.value
  characterNumber.value = value
  characterRange.value = value
}

form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = characterNumber.value
  const includeUppercase = includeUppercase.checked
  const includeNumbers = includeNumbers.checked
  const includeSpecialCharacters = includeSpecialCharacters.checked
  const password = generatePassword(characterNumber, includeUppercase, includeNumbers, includeSpecialCharacters)
})

const uppercase = arrayLowToHigh(65, 90)
const lowercase = arrayLowToHigh(97, 122)
const numbers = arrayLowToHigh(48, 57)
const specialCharacters = arrayLowToHigh(33, 47).concat(arrayLowToHigh(58, 64)).concat(arrayLowToHigh(91, 96)).concat(arrayLowToHigh(123, 126))



form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = characterNumber.value
  const includeUppercase = includeUppercase.checked
  const includeNumbers = includeNumbers.checked
  const includeSpecialCharacters = includeSpecialCharacters.checked
  const password = generatePassword(characterAmount, includeUppercase, includeUppercase, includeSpecialCharacters)
  password.innerText = password
})

function generatePassword(characterNumber, includeNumbers, includeSpecialCharacters, includeUppercase) {
  let charCodes = lowercase
  if (includeUppercase) charCodes = charCodes.concat(uppercase)
  if (includeNumbers) charCodes = charCodes.concat(numbers)
  if (includeSpecialCharacters) charCodes = charCodes.concat(specialCharacters)

  const passwordCharacters = []
  for (let i = 0; i < characterNumber; i++) {
    const character = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(character))
  }
  return passwordCharacters.join('')
}

function arrayLowToHigh(low, high) {
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}