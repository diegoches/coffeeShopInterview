var app = angular.module('customPage');

app.service('specializationsService', function($http,$q) {

  var deferred = $q.defer();

  $http.get('js/json/specializationsJson.json').then(function(data) {
      deferred.resolve(data);
  });

  this.getContent = function(){
      return deferred.promise;
  };

});
