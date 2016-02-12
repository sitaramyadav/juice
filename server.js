var http = require('http');
var controller = require('./lib/controller.js');
http.createServer(controller).listen(8080);
