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

var app = require('../server/app');

const chai = require('chai');

const expect = chai.expect;

chai.should();
var supertest = require("supertest");

var server = supertest.agent("http://localhost:3000");

// UNIT test begin

describe("SAMPLE unit test",function(){

  // #1 should return home page

  it("should return home page",function(done){

    // calling home page api
    server
    .get("/")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      // Error key should be false.
      res.body.error.should.equal(false);
      done();
    });
  });

});