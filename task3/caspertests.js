var home_url = "http://m.kamajewellery.com"

function getCategoryLink() {
	var catLinks = document.querySelectorAll("div.full-width-card-with-img a");
	var allLinks =  Array.prototype.map.call(catLinks, function(e) {
		return e.getAttribute('href');
	});
	return allLinks[0]; // TODO: make this random
}


casper.test.begin("Placing an order", 2, function suite(test) {
	casper.start(home_url, function() {
		test.assertTitle("Welcome | Kama Jewellery", "Kama Jewellery title is the one expected");
	});

	casper.then(function() {
		var categoryUrl = this.evaluate(getCategoryLink);
		test.assertEquals(home_url + categoryUrl, "http://m.kamajewellery.com/shop/category/rings/kama-platinum");
	});

	casper.run(function() {
		test.done();
	});
});
