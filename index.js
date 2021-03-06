var express = require('express');
var app = express(); //app instance of an express

var server = app.listen(5000, function(){ 
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
});


/*
app.get('/', function(req, res) { //request(can pass forms), respond
	res.send('Hello world');	//methods of res
}); */

/*
app.route('/students')
	.get(function(req, res) {
cd		res.send('Get a student'); })
	.post(function(req,res) {
		res.send('Add a student'); })
	.put(function(req, res) {
		res. send('Update a student'); }); */

//2 additional modules		
app.use(require('body-parser') ()); //can accept payloads or can get data
app.use(require('method-override') ());	//let's put and delete method applicable or useful
app.use(require(__dirname + '/config/router') (express.Router())); //__dirname is where the file being executedcd
app.use(express.static(__dirname+ '/public' ));