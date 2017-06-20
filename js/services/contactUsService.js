var app = angular.module('customPage');

app.service('contactUsService', function($http,$q) {

  var deferred = $q.defer();

  $http.get('js/json/contactUsJson.json').then(function(data) {
      deferred.resolve(data);
  });

  this.getContent = function(){
      return deferred.promise;
  };

});
