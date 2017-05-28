const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');
const port = process.env.PORT || 3000;
const app = express();



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Root API endpoint
app.use('/', routes);
 

//This gets route for webpage
//test of server.===========================================
app.use((req,res,next) => {
    console.log('%s request recieved', req.method);
    next()
});


app.listen(port);
console.log('APP is running on port:' + port);