var app = angular.module('customPage');

app.directive('specializationsDirective', function(specializationsService){
  return {
    restrict: "E",
    templateUrl: 'js/templates/specializationsDirective.html',
    controller : function ($scope) {
    	var contentPromise = specializationsService.getContent();
        $scope.content = Array();
    	contentPromise.then(function (data) {
            for (var i=0;i<data.data.length; i++) {
                var currentObj = {};
                currentObj.title = data.data[i].title;
                currentObj.img = data.data[i].img;
                currentObj.text = data.data[i].text;
                $scope.content.push(currentObj);    
            }
    	});
    }
  }
});
