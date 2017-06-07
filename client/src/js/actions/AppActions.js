// import {db, firebase, groupRef, usersRef } from '../firebase/firebase';

1
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


2
const Actions = {
  registerUser(email, password, userName) {
    PostItDispatcher.dispatch({
      type: PostItActionTypes.REGISTER_USER, email, password, userName
    });
  },

  loginUser(email, password) {
    PostItDispatcher.dispatch({
      type: PostItActionTypes.LOGIN_USER, email, password
    });
  },

  addGroup(group) {
    PostItDispatcher.dispatch({
      type: PostItActionTypes.ADD_GROUP, group
    });
  },

  addUserGroup(userId, groupId) {
    PostItDispatcher.dispatch({
      type: PostItActionTypes.ADD_USER_GROUP, userId, groupId
    });
  },

  signOut() {
    PostItDispatcher.dispatch({
      type: PostItActionTypes.SIGN_OUT
    });
  }

};

3
export function createTodo(text){
    dispatcher.dispatch({
        type: "CREATE_TODO",
        text,
    });
}

4
 saveData(Name, Contact, userEmail) {
    $.post('https://noordean-contact-api.herokuapp.com/api/save', { name: Name, number: Contact, user: userEmail }, (Data) => {
      contactDispatcher.dispatch({
        type: 'SAVE_DATA',
        message: Data.message
      });
    });
  }