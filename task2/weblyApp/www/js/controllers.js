angular.module('starter.controllers', [])

.controller('appController', function($scope, $ionicSideMenuDelegate) {
  $scope.toggleMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  }
})
.controller('earringController', function($scope, $ionicModal, ProductFactory){

  $scope.cartItems = 0;
  $scope.cartHasItem = "none";
  $scope.cart = {};
  $scope.grandTotal = 0;


  $scope.doRefresh = function() {
    ProductFactory.getEarrings(function(data){
      $scope.products= data;
    });
    // Stop the ion-refresher from spinning
    $scope.$broadcast('scroll.refreshComplete');
  };

  $scope.doRefresh();
  $scope.addToCart = function(product){
    if($scope.products.stock.inStock){
      $scope.cartItems = $scope.cartItems + 1;
      $scope.grandTotal += product.price;
      if($scope.cart.hasOwnProperty(product.name)){
        $scope.cart[product.name].quantity += 1;
      }else{
        $scope.cart[product.name] = {itemName: product.name, thumbnail: product.thumbnail.url, price: product.price, quantity: 1 };
      }
        $scope.showCheckout();
    }
  };


  $scope.showCheckout = function(){
    if($scope.cartItems != 0){
      $scope.cartHasItem = "";
    }
  };

  // Create and load the Modal
  $ionicModal.fromTemplateUrl('checkoutCart.html', function(modal) {
    $scope.cartModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  // Open the cart modal
  $scope.openCart = function() {
    $scope.cartModal.show();
  };

  // Close the cart modal
  $scope.closeCart = function() {
    $scope.cartModal.hide();
  };

  // Clear the cart
  $scope.clearCart = function() {
    $scope.cartItems = 0;
    $scope.cartHasItem = "none";
    $scope.cart = {};
    $scope.grandTotal = 0;
    $scope.cartModal.hide();
  };

  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });




});
