'use strict';

angular.module('aboutApp', [])
.controller('aboutCtrl', ['$scope', function($scope) {
	var vm = this;
	
	initController();
		
	function initController() {
		$("#includedContent").load("main/main.html");
		$scope.title = "ABOUT";		
	}
}]);