'use strict';

angular.module('mainApp', [])
	.controller('mainCtrl', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
		var vm = this;
		
		$scope.weight = 1000; //TODO for MAIN function
		
		$rootScope.weight = $scope.weight;
		
		initController();
		
		function initController() {
			
		}
		
		
	}
]);