angular.module('starter.controllers', [])

.controller('appController', function($scope, $ionicSideMenuDelegate) {
   $scope.toggleMenu = function() {
      $ionicSideMenuDelegate.toggleLeft();
     }
})
.controller('earringController', function($scope, ProductFactory){

  $scope.doRefresh = function() {
    ProductFactory.getEarrings(function(data){
      $scope.products= data;
    });
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
  };

  $scope.doRefresh();
});
