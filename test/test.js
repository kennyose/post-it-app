'use strict'

const chai = require('chai');
const expect = chai.expect;

chai.should();

describe('Test 1', function () {
	it('It should pass when everything is okay', function () {
		expect(true).to.be.true;
	});
});

function returnsname(name){
	return name;
};

describe('Test 2', function(){
	it('It should return the name passed into the function', function(){
		returnsname('Ebuka').should.equal('Ebuka');
	})
})

