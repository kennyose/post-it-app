'use strict';

var express = require('express');

var router = express.Router();

var _require = require('./config'),
    firebase = _require.firebase,
    usersRef = _require.usersRef,
    groupRef = _require.groupRef;

/* GET home route */


router.get('/', function (req, res) {
  res.send('Welcome to PostIt Website');
});

router.get('/signup', function (req, res) {
  res.send('This is the Sign Up Page');
});

// Sign Up
router.post('/user/signup', function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var email = req.body.email;
  firebase.auth().createUserWithEmailAndPassword(email, password).then(function (user) {
    // add element to database
    usersRef.push({
      username: username,
      password: password,
      email: user.email
    });
    res.json({ message: 'The user ' + username + ', was created and saved' });
  }).catch(function (error) {
    res.json(error);
  });
});

// Sign In
router.post('/user/signin', function (req, res) {
  var email = req.body.email;
  var password = req.body.password;
  firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
    res.json({ message: 'The user ' + email + ', has logged in' });
  }).catch(function (error) {
    res.json(error);
  });
});

// Sign Out
router.post('/user/signout', function (req, res) {
  firebase.auth().signOut().then(function () {
    res.json({ message: 'User has signed out' });
  }).catch(function (error) {
    res.json(error);
  });
});

// Route for Group
router.post('/group', function (req, res) {
  var groupID = req.body.groupname;
  groupRef.child(groupID).set({
    id: groupID,
    users: null
  }).then(function () {
    res.json({
      message: 'A group named ' + groupID + ' has been created successfully!'
    });
  }).catch(function (err) {
    res.send(err);
  });
});

router.post('/group/:groupID/:uidd', function (req, res) {
  var groupID = req.params.groupID;
  // Firebase get all users
  var uid = req.params.uidd;
  usersRef.child(uid).once('value', function (snapshot) {
    var userEmail = snapshot.val().email;

    groupRef.child(groupID).child(users).push(userEmail).then(function () {
      res.json({
        message: 'User ' + userEmail + ' successfully added to group ' + groupID
      });
    });
  }).catch(function (err) {
    res.json(snapshot.val());
  });
});

module.exports = router;