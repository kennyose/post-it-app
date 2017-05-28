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
   firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) =>{
        res.json({ message: `The user ${email}, has logged in` });
        })
        .catch((error) =>{
            res.json(error);
        });
        
});

// Sign Out
router.post('/user/signout', (req, res) => {
  firebase.auth().signOut()
            .then(() => {
              res.json({ message: 'User has signed out' });
            })
            .catch((error) => {
              res.json(error);
            });
});


// Route for Group
router.post('/group', (req, res) => {
  const groupID = req.body.groupname;
  groupRef.child(groupID).set({
    id: groupID,
    users: null
  }).then(() => {
    res.json({
      message: `A group named ${groupID} has been created successfully!`
    });
  }).catch((err) => {
    res.send(err);
  });
});


module.exports = router;
