var home_url = "http://m.kamajewellery.com";

casper.test.begin("Placing an order", 3, function suite(test) {

	casper.start(home_url);

	casper.then(function() {
		test.assertTitle("Welcome | Kama Jewellery", "Kama Jewellery title is the one expected");
	});

	casper.then(function() {
		// click on the first category
		this.click("div.full-width-card-with-img a");
	});

	casper.then(function() {
		var expectedTitle = "Platinum Rings | Kama Jewellery";
		test.assertTitle(expectedTitle, "Category page is as expected");
	});

	casper.then(function() {
		// click on the first product
		this.click('ul.products-grid li.product a');
	});

	casper.then(function() {
		var expectedTitle = "Marisa Diamond Platinum Ring | Kama Jewellery";
		test.assertTitle(expectedTitle, "Product page is as expected");
	});

	casper.then(function() {
		// fill the dropdown and click on buy now
		this.fill('form#add-to-cart-form', {
			'options[416]': "9"
		}, true);
	});

	casper.then(function() {
		console.log(this.getCurrentUrl()); // not going correctly
	});

	casper.run(function() {
		test.done();
	});

});
