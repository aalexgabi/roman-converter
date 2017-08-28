'use strict'

const chai = require('chai')
const RomanNumber = require('../lib/roman-converter')

chai.should()

/* global describe it */
/* eslint no-new: off */

describe('roman-converter', function () {
  describe('RomanNumber', function () {
    describe('constructor', function () {
      it('should throw on null with value required', function () {
        (function () {
          new RomanNumber()
        }).should.throw('value required')
      })
      it('should throw on undefined with value required', function () {
        (function () {
          new RomanNumber()
        }).should.throw('value required')
      })
      it('should throw on too big number with invalid range', function () {
        (function () {
          new RomanNumber(9999)
        }).should.throw('invalid range')
      })
    })
  })
})
