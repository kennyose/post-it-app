const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const path = require('path');


const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve bundled client files
app.use(express.static(path.join(__dirname, '../client/build')));


// Root API endpoint
app.use('/', routes);


// This gets route for webpage
// test of server.===========================================
app.use((req, res, next) => {
  next();
});


app.listen(port);

module.exports = app;
