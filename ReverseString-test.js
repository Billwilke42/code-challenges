const chai = require('chai')
const expect = chai.expect
const reverseString = require('./ReverseString')

describe('ReverseString', function() {
  it('should be a function', function() {
    expect(reverseString).to.be.a('function')
  }) 
})