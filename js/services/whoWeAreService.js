var app = angular.module('customPage');

app.service('whoWeAreService', function($http,$q) {

  var deferred = $q.defer();

  $http.get('js/json/whoWeAreJson.json').then(function(data) {
      deferred.resolve(data);
  });

  this.getContent = function(){
      return deferred.promise;
  };

});
