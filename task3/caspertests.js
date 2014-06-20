var casper = require('casper').create();

var url = "http://m.kamajewellery.com/"

casper.start(url, function() {
	this.echo(this.getTitle());
});

casper.run();
