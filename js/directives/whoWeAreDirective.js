var app = angular.module('customPage');

app.directive('whoWeAreDirective', function(whoWeAreService){
  return {
    restrict: "E",
    templateUrl: 'js/templates/whoWeAreDirective.html',
    controller : function ($scope) {
    	var contentPromise = whoWeAreService.getContent();
        $scope.whoWeAre = Array();
    	contentPromise.then(function (data) {
    		for (var i=0;i<data.data.length; i++) {
                var currentObj = {};
                currentObj.title = data.data[i].title;
                currentObj.img = data.data[i].img;
                currentObj.text = data.data[i].text;
                $scope.whoWeAre.push(currentObj);    
            }
            console.log($scope.whoWeAre);
    	});
    }
  }
});
