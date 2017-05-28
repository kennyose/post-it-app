const express = require('express');

const router = express.Router();

const { firebase, usersRef, groupRef } = require('./config');


/* GET home route */
router.get('/', (req, res) => {
  res.send('Welcome to PostIt Website');
});

router.get('/signup', (req, res) => {
  res.send('This is the Sign Up Page');
});


// Sign Up
router.post('/user/signup', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
        // add element to database
      usersRef.push({
        username: username,
        password: password,
        email: user.email
      });
      res.json({ message: `The user ${username}, was created and saved` });
    })
    .catch((error) => {
      res.json(error);
    });
});


// Sign In
router.post('/user/signin', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
});
module.exports = router;
