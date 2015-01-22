
// build a server that can server files from the public directory

var fs = require('fs');
var http = require('http');

var server = http.createServer( function(req, res) {
	// called for any/every request
	console.log(req.url);
	
	var path = req.url.substring(1);
	console.log(path);

	fs.readFile('public/' + path, function(err, data) {
		if (err) {
			res.writeHead(500, { 'Content-Type' : 'text/plain' });
			res.end("It failed!");
		} else {
			res.writeHead(200, { 'Content-Type' : 'text/html' });
			res.end(data.toString());
		}

	})
});

server.listen(3000, '127.0.0.1');
