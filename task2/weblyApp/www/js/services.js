angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('ProductFactory', function($http) {
  // Might use a resource here that returns a JSON array
  return{
    getEarrings: function(callback){
      $http.get('http://localhost:3000').success(callback);
    }
  };

});
