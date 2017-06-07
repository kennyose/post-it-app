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

  loadContacts(data) {
    this.contacts = data;
    this.emit('change');
  }

  checkSaveStatus(message) {
      this.saveStatus = message;
      this.emit('change');
  }

  showDeleteStatus(message) {
      this.deleteStatus = message;
      this.emit('change');
  }

  getDeleteMessage() {
    return this.deleteStatus;
  }

  showUpdateStatus(message) {
      this.updateMessage = message;
      this.emit('change');
  }

  getUpdateMessage() {
    return this.updateMessage;
  }
  
  getSaveStatus() {
    return this.saveStatus;
  }

  getContacts() {
    return this.contacts;
  }

  handleActions(action) {
    switch (action.type) {
      case 'LOAD_CONTACTS':
        this.loadContacts(action.data);
        break;
      case 'SAVE_DATA':
        this.checkSaveStatus(action.message);
        break;
      case 'DELETE_DATA':
        this.showDeleteStatus(action.message);
        break;
      case 'UPDATE_DATA':
        this.showUpdateStatus(action.message);
        break;
    }
  }
}

const appStore = new AppStore();
dispatcher.register(appStore.handleActions.bind(appStore));
export default appStore;
