const AppDispatcher = require('../dispatcher/AppDispatcher');
const EventEmitter = require('events').EventEmitter;
const assign = require('object-assign');


const CHANGE_EVENT = 'change';

const AppStore = assign({}, EventEmitter.prototype, {
  emitChange: () => {
    this.emit(CHANGE_EVENT);
  }
});

AppDispatcher.register((payload) => {
  console.log(payload);
  return true;
});

module.exports = AppStore;
