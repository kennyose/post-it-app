const request = require('supertest');
const app = require('../server/app');

const userSignUp = {
  username: 'Ebuka',
  password: '12345ebuka',
  email: 'ebuka@gmail.com'
};


describe('SignUp Route', () => {
  it('This user should signup with his/her details', (done) => {
    request(app)
      .post('/user/signup')
      .send(userSignUp)
      .set('Accept', 'application/json')
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});
