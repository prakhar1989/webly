Webly Assignment
===

### Task 1 - Basic Javascript debugging

I am attaching a tarball, within it there are 4 Javascript snippets. Each one has a bug in them. The problem in each one is mentioned at the top of the file. Correct the errors in the code and put it in a new repository in github/bitbucket. Write a clear comment on why the error was being caused and how you fixed it.
These are just basic stuff, you should be able to solve them with no problems, what we are looking from you is clear explanations to why the problem was present and how did you solve the problem?


### Task 2 - One screen Android app

Create a one page android app with Ionic Framework (http://ionicframework.com), we will give a web service resource we are using internally to power our product. This is a product resource endpoint http://retailplusapp.com/api/store/catalog/products/413.json representing a single product. You are required to pass this header "X-RetailPlus-Store-Id : 533ce7e652c8fdd31d8b4569" with the request to get a successful response from the web service. 
This end point will give you basic information about the product, like the images, price, sku, name, description etc. For a reference this is the actual implementation page for the resource http://m.kamajewellery.com/shop/category/rings/product/ring-38837
You are expected to give a final .apk file which will open the product page. For any further clarifications feel free to contact me or Aditya


### Task 3 - Testing with Casper

We need you to create a navigation test scenarios using CasperJS (http://casperjs.org/) to test a checkout flow, from adding a product to cart to placing an order as a guest user.

The expected output is the casper js files required to test the navigation. Please usehttp://m.kamajewellery.com/ to make these tests, also please keep the name in shipping and billing form as webly_test as the ecommerce team at Kama will need to know that these are test orders coming from our system.
