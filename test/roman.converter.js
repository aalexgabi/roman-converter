'use strict'

const chai = require('chai')
const RomanNumber = require('../lib/roman-converter')
const util = require('util')

chai.should()
const expect = chai.expect

/* global describe it */
/* eslint no-new: off */

describe('RomanNumber', function () {
  describe('constructor', function () {
    it('should throw value required on null ', function () {
      (function () {
        new RomanNumber()
      }).should.throw('value required')
    })
    it('should throw value required on undefined ', function () {
      (function () {
        new RomanNumber()
      }).should.throw('value required')
    })
    it('should throw invalid range on too big number', function () {
      (function () {
        new RomanNumber(9999)
      }).should.throw('invalid range')
    })
    it('should throw invalid value on unexpected input', function () {
      (function () {
        new RomanNumber(new Date())
      }).should.throw('invalid value')
    })
  })

  describe('parse', function () {
    const testValues = [
      [null, new Error('value required')],
      ['', new Error('value required')],
      [0, new Error('invalid range')],
      [1, 1],
      [3, 3],
      [4, 4],
      [5, 5],
      ['I', 1],
      ['III', 3],
      ['IIII', new Error('invalid value')],
      ['IV', 4],
      ['V', 5],
      [1968, 1968],
      ['1473', new Error('invalid value')],
      [2999, 2999],
      [3000, 3000],
      [10000, new Error('invalid range')],
      ['CDXXIX', 429],
      ['CD1X', new Error('invalid value')],
      ['error', new Error('invalid value')],
      ['MCDLXXXII', 1482],
      ['MCMLXXX', 1980],
      ['MMMMCMXCIX', 4999],
      ['MMMMDMXCIX', new Error('invalid value')]
    ]

    testValues.forEach(([value, result]) => {
      if (result instanceof Error) {
        it(`should throw ${result.message} on ${util.inspect(value)}`, function () {
          expect(() => {
            new RomanNumber(value)
          }).to.throw(result.message)
        })

        return
      }

      it(`should return ${util.inspect(result)} on ${util.inspect(value)}`, function () {
        const romanNumber = new RomanNumber(value)

        romanNumber.toInt().should.equal(result)
      })
    })
  })

  describe('toString', function () {
    const testValues = [
      [null, new Error('value required')],
      ['', new Error('value required')],
      [0, new Error('invalid range')],
      [1, 'I'],
      [3, 'III'],
      [4, 'IV'],
      [5, 'V'],
      ['I', 'I'],
      ['III', 'III'],
      ['IIII', new Error('invalid value')],
      ['IV', 'IV'],
      ['V', 'V'],
      [1968, 'MCMLXVIII'],
      ['1473', new Error('invalid value')],
      [2999, 'MMCMXCIX'],
      [3000, 'MMM'],
      [10000, new Error('invalid range')],
      ['CDXXIX', 'CDXXIX'],
      ['CD1X', new Error('invalid value')],
      ['error', new Error('invalid value')],
      ['MCDLXXXII', 'MCDLXXXII'],
      ['MCMLXXX', 'MCMLXXX'],
      ['MMMMCMXCIX', 'MMMMCMXCIX'],
      ['MMMMDMXCIX', new Error('invalid value')]
    ]

    testValues.forEach(([value, result]) => {
      if (result instanceof Error) {
        it(`should throw ${result.message} on ${util.inspect(value)}`, function () {
          expect(() => {
            new RomanNumber(value)
          }).to.throw(result.message)
        })

        return
      }

      it(`should return ${util.inspect(result)} on ${util.inspect(value)}`, function () {
        const romanNumber = new RomanNumber(value)

        romanNumber.toString().should.equal(result)
      })
    })
  })
})
