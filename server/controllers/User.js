const { firebase, usersRef } = require('../config');


class User {
  static signup(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
    // add element to database
      usersRef.push({
        username,
        password,
        email: user.email
      });
      res.send('Signup Successful');
    })
    .catch((error) => {
      res.send(error);
    });
  }

  static signin(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      res.send(user);
    })
   .catch((error) => {
     res.send(error);
   });
  }

  static signout(req, res) {
    firebase
    .auth()
    .signOut()
    .then(() => {
      res.send('User signed out');
    })
    .catch((error) => {
      res.send(error);
    });
  }
}


module.exports = User;
