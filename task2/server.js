var http  = require('http'),
	fs    = require('fs');

var app = http.createServer(function(req, res) {
	res.setHeader('Content-Type', 'application/json');
  // Website you wish to allow to connect
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
	var productJson = JSON.parse(fs.readFileSync('product.json'));
	res.end(JSON.stringify(productJson));
});

var port = 3000;
console.log("Running on port: " + port);
app.listen(port);
