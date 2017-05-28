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

module.exports = router;
