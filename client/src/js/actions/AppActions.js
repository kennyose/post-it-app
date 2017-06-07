// import {db, firebase, groupRef, usersRef } from '../firebase/firebase';


const AppDispatcher = require('../dispatcher/AppDispatcher');
const AppConstants = require('../constants/AppConstants');

const AppActions = {
  signUp: (email, password, username) => {
    AppDispatcher.handleSignUp({
      actionType: AppConstants.SIGN_UP,
      item
    });
  }

   signIn: (email, password) => {
    AppDispatcher.handleSignUp({
      actionType: AppConstants.SIGN_IN,
      item
    });
  }


};

module.exports = AppActions;
