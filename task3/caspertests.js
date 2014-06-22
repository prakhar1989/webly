var _ = require("underscore");
var home_url = "http://m.kamajewellery.com";

function getCategoryLink() {
  var catLinks = document.querySelectorAll("div.full-width-card-with-img a");
  var allLinks =  Array.prototype.map.call(catLinks, function(e) {
    return e.getAttribute('href');
  });
  return allLinks[0]; // TODO: make this random
}

// casper.test.begin(testTitle, numberOfTests, callback)

casper.test.begin("Placing an order", 4, function suite(test) {
  casper.start(home_url);

  casper.then(function() {
    test.assertTitle("Welcome | Kama Jewellery", "Kama Jewellery title is the one expected");
  });

  casper.then(function() {
    var categoryUrl = this.evaluate(getCategoryLink);
    test.assertEquals(home_url + categoryUrl, "http://m.kamajewellery.com/shop/category/rings/kama-platinum");
  });

  casper.then(function(){
    this.click("div.full-width-card-with-img a"); //click on platinum category
  });

  casper.then(function() {
    console.log('clicked ok, new location is ' + this.getCurrentUrl());
    test.assertTitle("Platinum Rings | Kama Jewellery", "Platinum Jewellery title is the one expected");
  });

  casper.then(function(){
    this.click("li.item a"); //click on a ring
  });

  casper.then(function() {
    console.log('clicked ok, new location is ' + this.getCurrentUrl());
    test.assertTitle("Marisa Diamond Platinum Ring | Kama Jewellery", "Marisa Diamond title is the one expected");
  });

  casper.run(function() {
    test.done();
  });
});
