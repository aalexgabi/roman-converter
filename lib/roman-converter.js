'use strict'

// FIXME: Use complete regex
const romanNumberRegex = /^[MDCLXVI]$/

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

class RomanNumber {
  constructor (number) {
    if (number === null || number === undefined || number === '') {
      throw new Error('value required')
    }

    if (typeof number === 'string') {
      this.number = RomanNumber.parse(number)
    } else if (Number.isInteger(number)) {
      if (number > 3999) {
        throw new Error('invalid range')
      }

      this.number = number
    } else {
      throw new Error('invalid value')
    }
  }

  toInt () {
    return this.number
  }
}

RomanNumber.parse = (romanNumber) => {
  if (typeof romanNumber !== 'string' || !romanNumberRegex.test(romanNumber)) {
    throw new Error('invalid value')
  }

  let number = 0

  for (let i = 0; i < romanNumber.length; i++) {
    const currentDigit = romanNumber[i]
    const nextDigit = romanNumber[i + 1]

    // If invalid value
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

  return number
}

RomanNumber.toString = () => {
  // TODO: implement
}

module.exports = RomanNumber
