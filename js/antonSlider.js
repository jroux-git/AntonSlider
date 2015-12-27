var sliderApp = angular.module('sliderApp', []);

sliderApp.controller('sliderCtrl', function($scope) {
  
$scope.$watch('sliderModel', function (newVal) {
		if (typeof newVal != undefined) {
			var floatVal = parseFloat(newVal)/12;
			
			$scope.repayment12 = floatVal*0.1 + floatVal;
			$scope.repayment24 = floatVal*0.08 + floatVal;
        }
      });
});