var express = require('express');
var data = './data/juice_orders';
var fs = require('fs');
var app = express();
app.use(express.static('public'));

app.get('/',function(req,res,next){
	res.redirect('index.html');
});

app.get('/juice',function(req,res){
	var readData = fs.readFileSync(data,'utf8');
	res.send(readData);
});

module.exports = app;