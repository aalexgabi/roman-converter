'use strict'

const chai = require('chai')
const RomanNumber = require('../lib/roman-converter')

chai.should()

/* global describe it */
/* eslint no-new: off */

describe('roman-converter', function () {
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
        ['I', 1],
        ['III', 3],
        ['IIII', 4],
        ['IV', 4],
        ['V', 5],
        ['1473', new Error('invalid value')],
        ['CDXXIX', 429],
        ['CD1X', 410],
        ['error', new Error('invalid value')],
        ['MCDLXXXII', 1482],
        ['MCMLXXX', 1980],
        ['MMMMCMXCIX', 4999],
        ['MMMMDMXCIX', 4599]
      ]

      testValues.forEach(([value, result]) => {
        if (result instanceof Error) {
          return RomanNumber.parse(value).message.should.equal(result.message)
        }

        RomanNumber.parse(value).should.equal(result)
      })
    })
  })
})
