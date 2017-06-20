var app = angular.module('customPage');

app.directive('contactUsDirective', function(contactUsService){
  return {
    restrict: "E",
    templateUrl: 'js/templates/contactUsDirective.html',
    controller : function ($scope) {
    	var contentPromise = contactUsService.getContent();
    	contentPromise.then(function (data) {
    		$scope.usPhone = data.data.us_phone;
    		$scope.arPhone = data.data.ar_phone;
    		$scope.email = data.data.email;
    		$scope.address = data.data.address;
    	});
    }
  }
});
