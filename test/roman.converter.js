'use strict'

const chai = require('chai')
const RomanNumber = require('../lib/roman-converter')

chai.should()

/* global describe it */
/* eslint no-new: off */

describe('roman-converter', function () {
  describe('RomanNumber', function () {
    describe('constructor', function () {
      it('should reject null with value required', function () {
        (function () {
          new RomanNumber()
        }).should.throw('value required')
      })
      it('should reject undefined with value required', function () {
        (function () {
          new RomanNumber()
        }).should.throw('value required')
      })
      it('should reject too big number with invalid range', function () {
        (function () {
          new RomanNumber(9999)
        }).should.throw('invalid range')
      })
    })
  })
})
