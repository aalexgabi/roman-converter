'use strict'

const romanNumberRegex = /^M*(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/

const romanDigitsValues = {
  'M': 1000,
  'CM': 900,
  'D': 500,
  'CD': 400,
  'C': 100,
  'XC': 90,
  'L': 50,
  'XL': 40,
  'X': 10,
  'IX': 9,
  'V': 5,
  'IV': 4,
  'I': 1
}

// Create a sorted array in descending order to simplify convertion to roman
let valuesForRomanDigits = []
for (let key in romanDigitsValues) {
  if (romanDigitsValues.hasOwnProperty(key)) {
    valuesForRomanDigits.push({
      digit: key,
      value: romanDigitsValues[key]
    })
  }
}
valuesForRomanDigits = valuesForRomanDigits.sort(function (a, b) {
  return b.value - a.value
})

function RomanNumber (number) {
  if (!(this instanceof RomanNumber)) {
    return new RomanNumber(number)
  }

  if (number === null || number === undefined || number === '') {
    throw new Error('value required')
  }

  if (typeof number === 'string') {
    this.number = RomanNumber.parse(number)
  } else if (Number.isInteger(number)) {
    if (number < 1 || number > 3999) {
      throw new Error('invalid range')
    }

    this.number = number
  } else {
    throw new Error('invalid value')
  }
}

RomanNumber.prototype.toInt = function () {
  return this.number
}

RomanNumber.prototype.toString = function () {
  let romanNumber = ''
  let numberCopy = this.number

  valuesForRomanDigits.forEach((valueDigitPair) => {
    while (numberCopy >= valueDigitPair.value) {
      romanNumber += valueDigitPair.digit
      numberCopy -= valueDigitPair.value
    }
  })

  return romanNumber
}

RomanNumber.parse = (romanNumber) => {
  if (romanNumber === null || romanNumber === undefined || romanNumber === '') {
    throw new Error('value required')
  }

  if (typeof romanNumber !== 'string' || !romanNumberRegex.test(romanNumber)) {
    throw new Error('invalid value')
  }

  let number = 0

  for (let i = 0; i < romanNumber.length; i++) {
    const currentDigit = romanNumber[i]
    const nextDigit = romanNumber[i + 1]

    // If combined digits are following
    if (nextDigit && romanDigitsValues[currentDigit] < romanDigitsValues[nextDigit]) {
      // Check if there are valid combined digits
      if (!romanDigitsValues[currentDigit + nextDigit]) {
        throw new Error('invalid value')
      }

      number += romanDigitsValues[currentDigit + nextDigit]
      i++
      continue
    }

    number += romanDigitsValues[currentDigit]
  }

  if (number < 1 || number > 3999) {
    throw new Error('invalid range')
  }

  return number
}

module.exports = RomanNumber
