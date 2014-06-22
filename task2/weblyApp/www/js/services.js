angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('ProductFactory', function($http) {
  // Might use a resource here that returns a JSON array
  return{
    getEarrings: function(callback){
      var config = {headers: {
              'X-RetailPlus-Store-Id': '533ce7e652c8fdd31d8b4569 ',
              'Accept': 'application/json;odata=verbose'
          }
      };
      $http.get('http://retailplusapp.com/api/store/catalog/products/413.json',config).success(callback);
//    $http.get('http://localhost:3000').success(callback);
    }
  };

});
