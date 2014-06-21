angular.module('starter.controllers', [])

.controller('appController', function($scope, $ionicSideMenuDelegate) {
   $scope.toggleMenu = function() {
      $ionicSideMenuDelegate.toggleLeft();
     }
})
.controller('mainController', function($scope){
//   $scope.doRefresh = function() {
//     $http.get('www.google.com')
//      .success(function(newItems) {

//      })
//      .finally(function() {
//        // Stop the ion-refresher from spinning
//        $scope.$broadcast('scroll.refreshComplete');
//      });
//   };
});
