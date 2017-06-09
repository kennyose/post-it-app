import axios from 'axios';
import {AppDispatcher} from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const AppActions = {
  signUp: (email, password, username) => {

    axios.post('user/signup')
      .then(contacts => {
        AppDispatcher.dispatch({
          actionType: ContactConstants.RECIEVE_CONTACTS,
          contacts: contacts
        });
      })
      .catch(message => {
        AppDispatcher.dispatch({
          actionType: ContactConstants.RECIEVE_CONTACTS_ERROR,
          message: message
        });
      });
  },

   signIn: (email, password) => {
    AppDispatcher.handleSignUp({
      actionType: AppConstants.SIGN_IN,
      item
    });
  }


};

module.exports = AppActions;
