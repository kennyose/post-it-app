// import {db, firebase, groupRef, usersRef } from '../firebase/firebase';


var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
    signUp: function(item){
    AppDispatcher.handleSignUp({
      actionType:AppConstants.SIGN_UP,
      item: item
    })
  }

    
	
}

module.exports = AppActions;
