import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/AppDispatcher';

class AppStore extends EventEmitter {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      email: ''
  }

  
  handleActions(action) {
    switch (action.type) {
      case 'SIGN_UP':
        this.loadContacts(action.data);
        break;
      case 'SIGN_IN':
        this.checkSaveStatus(action.message);
        break;
    
    }
  }
}
}

const appStore = new AppStore();
dispatcher.register(appStore.handleActions.bind(appStore));
export default appStore;
