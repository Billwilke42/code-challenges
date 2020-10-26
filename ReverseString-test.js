const chai = require('chai')
const expect = chai.expect
const reverseStrings = require('./ReverseString')

describe('ReverseString', function() {
  it('should be a function', function() {
    expect(reverseStrings).to.be.a('function')
  }) 
})