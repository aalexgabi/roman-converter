'use strict'

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
  // TODO: implement
}
