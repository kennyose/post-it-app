//firebase setup==========================
const firebase = require('firebase');
var config = {
    apiKey: "AIzaSyDx5Xi4OxL1F18jqNO1L1JyAhO8CM3J3h0",
    authDomain: "post-it-app-8b2cb.firebaseapp.com",
    databaseURL: "https://post-it-app-8b2cb.firebaseio.com",
    projectId: "post-it-app-8b2cb",
    storageBucket: "post-it-app-8b2cb.appspot.com",
    messagingSenderId: "852510559801"
  };
  firebase.initializeApp(config);

  const firebaseAuth = firebase.auth;

  let db = firebase.database();
  let usersRef = db.ref('users');
  let groupRef = db.ref('Groups');

module.exports = {
  firebase,
  db,
  usersRef,
  groupRef,
  firebaseAuth
};





