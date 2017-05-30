const chai = require('chai');

const expect = chai.expect;

chai.should();

const returnsname = name => name;

// This will test true to be true
describe('Test 1', () => {
  it('It should pass when everything is okay', () => {
    expect(true).to.be.true;
  });
});

// This will test the function returnsname
describe('Test 2', () => {
  it('It should return the name passed into the function', () => {
    returnsname('Ebuka').should.equal('Ebuka');
  });
});

