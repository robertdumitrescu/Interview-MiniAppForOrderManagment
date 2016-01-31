"use strict";

/**
 * We will use require instead of the new and fancy 'import' keyword because
 * the import feature is not yet supported in NodeJS v 5.4.1
 * */

let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');


let app = express();


/**
* Dev config
* */

global.appRoot = path.resolve(__dirname);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// set the view engine to ejs
app.set('view engine', 'ejs');


let mainController = require('./controllers/mainController.js');
let apiController = require('./controllers/apiController.js');


app.use('/', mainController);
app.use('/api', apiController);



let server = app.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;

    console.log('Development mode: Node front-end resume listening at http://%s:%s', host, port);
});