var casper = require('casper').create();

var home_url = "http://m.kamajewellery.com/"

function getCategoryLink() {
	var catLinks = document.querySelectorAll("div.full-width-card-with-img a");
	var allLinks =  Array.prototype.map.call(catLinks, function(e) {
		return e.getAttribute('href');
	});
	return allLinks[0]; // TODO: make this random
}

casper.start(home_url, function() {
	this.echo("Begin crawling: " + this.getTitle());
});

casper.then(function() {
	var categoryUrl = this.evaluate(getCategoryLink);
	this.echo(categoryUrl);
});

casper.run();
