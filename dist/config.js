"use strict";

//firebase setup==========================
var firebase = require('firebase');
var config = {
  apiKey: "AIzaSyDx5Xi4OxL1F18jqNO1L1JyAhO8CM3J3h0",
  authDomain: "post-it-app-8b2cb.firebaseapp.com",
  databaseURL: "https://post-it-app-8b2cb.firebaseio.com",
  projectId: "post-it-app-8b2cb",
  storageBucket: "post-it-app-8b2cb.appspot.com",
  messagingSenderId: "852510559801"
};
firebase.initializeApp(config);

var db = firebase.database();
var usersRef = db.ref('users');
var groupRef = db.ref('Groups');

module.exports = {
  firebase: firebase,
  db: db,
  usersRef: usersRef,
  groupRef: groupRef
};