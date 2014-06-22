angular.module('starter.controllers', [])

.controller('appController', function($scope, $ionicSideMenuDelegate) {
  $scope.toggleMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  }
})
.controller('earringController', function($scope, ProductFactory){

  $scope.cartItems = 0;
  $scope.cartHasItem = "none";

  $scope.doRefresh = function() {
    ProductFactory.getEarrings(function(data){
      $scope.products= data;
    });
    // Stop the ion-refresher from spinning
    $scope.$broadcast('scroll.refreshComplete');
  };

  $scope.doRefresh();

  $scope.addToCart = function(){
    if($scope.products.stock.inStock){
      $scope.cartItems = $scope.cartItems + 1;
      $scope.showCheckout();
    }
  };

  $scope.showCheckout = function(){
    if($scope.cartItems != 0){
      $scope.cartHasItem = "";
    }
  };


});
