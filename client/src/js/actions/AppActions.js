// import {db, firebase, groupRef, usersRef } from '../firebase/firebase';


const AppDispatcher = require('../dispatcher/AppDispatcher');
const AppConstants = require('../constants/AppConstants');

const AppActions = {
  signUp: (item) => {
    AppDispatcher.handleSignUp({
      actionType: AppConstants.SIGN_UP,
      item
    });
  }
};

module.exports = AppActions;
