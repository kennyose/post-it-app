var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var AppDispatcher = assign(new Dispatcher(), {
  handleViewAction: function(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action 
    });
  },
  handleSignUp: function(action){
	  this.dispatch({
		  source: 'SIGN_UP',
		  action: action
	  })
  }
});

module.exports = AppDispatcher;