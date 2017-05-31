const chai = require('chai');

const expect = chai.expect;

chai.should();

const request = require('supertest');
const express = require('express');
 
const app = express();
 
describe('GET /users', function() {
  it('respond with json', function(done) {
    request(app)
      .get('/users')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});