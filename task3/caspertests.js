var home_url = "http://m.kamajewellery.com";

casper.options.stepTimeout = 20000;

casper.test.begin("Placing an order", 8, function suite(test) {

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
			'options[416]': '2884',
		});
		this.click('button[type=submit]');
	});

	casper.waitForSelector('.filled-cart');

	casper.then(function() {
		var cart_url = "http://m.kamajewellery.com/shop/checkout/cart";
		test.assertEquals(cart_url, this.getCurrentUrl(), "Cart page loaded as expected");
	});

	casper.then(function() {
		// click on place order
		this.click('.filled-cart div.button a');
	});

	casper.waitForSelector('form#form-checkout-login');

	casper.then(function() {
		var checkout_url = "http://m.kamajewellery.com/shop/checkout/#/index";
		test.assertEquals(checkout_url, this.getCurrentUrl(), "Checkout page Step 1 [LOGIN] - loaded as expected");
	});

	casper.then(function() {
		this.fill('form#form-checkout-login', {
			'email': "webly_test@example.com",
		});
		this.click('button[type=submit]');
	});

	casper.waitForSelector('form#form-checkout-shipping');

	casper.then(function() {
		var checkout_url = "http://m.kamajewellery.com/shop/checkout/#/shipping";
		test.assertEquals(checkout_url, this.getCurrentUrl(), "Checkout page Step 2 [DELIVERY] - loaded as expected");
	});

	casper.then(function() {
		this.fill('form#form-checkout-shipping', {
			'pincode': '201301',
			'firstname': 'webly_test',
			'lastname': 'webly_test',
			'shippingStreet': '221B Baker Street',
			'shippingState': '2',
			'shippingCity': 'Hyderabad',
			'mobile': '9009900999'
		});
		this.click('button[type=submit]');
	});

	casper.waitForSelector('form#form-checkout-payment');

	casper.then(function() {
		var checkout_url = "http://m.kamajewellery.com/shop/checkout/#/payment";
		test.assertEquals(checkout_url, this.getCurrentUrl(), "Checkout page Step 3 [PAYMENT] - loaded as expected");
	});

	casper.waitForSelector('ul.payment-methods li');

	casper.then(function() {
		// click on cash on delivery
		this.click('ul.payment-methods li:nth-child(2)');
	});

	casper.waitForSelector('div.review-container');

	casper.then(function() {
		test.assert(this.exists('div.review-container h4'), "Order Review heading is as expected");
		this.click('button[type=submit]');
	});

	casper.waitForSelector('div.processing-order');

  casper.then(function() {
		console.log(this.getCurrentUrl());
	});

	casper.run(function() {
		test.done();
	});
});
