'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var routes = require('./routes');
var port = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Root API endpoint
app.use('/', routes);

//This gets route for webpage
//test of server.===========================================
app.use(function (req, res, next) {
    console.log('%s request recieved', req.method);
    next();
});

app.listen(port);
console.log('APP is running on port:' + port);