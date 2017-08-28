'use strict'

const romanNumberRegex = /[MDCLXVI]/

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
}

RomanNumber.parse = (number) => {
  if (typeof number !== 'string' || !romanNumberRegex.test(number)) {
    throw new Error('invalid value')
  }

  for (var i = 0, len = number.length; i < len; i++) {
    const digit = number[i]

    // TODO: finish
  }
}

RomanNumber.toString = () => {
  // TODO: implement
}

RomanNumber.toInt = () => {
  return this.number
}

module.exports = RomanNumber
