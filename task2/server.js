var http  = require('http'),
	fs    = require('fs');

var app = http.createServer(function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	var productJson = JSON.parse(fs.readFileSync('product.json'));
	res.end(JSON.stringify(productJson));
});

var port = 3000;
console.log("Running on port: " + port);
app.listen(port);
