'use strict';

angular.module('backUpApp', [])
.controller('backUpCtrl', ['$scope', function($scope) {
	var vm = this;
	
	initController();
		
	function initController() {
		$("#includedContent").load("main/main.html"); 
		$("#includedTableContent").load("main/reports/table.html"); 
		$scope.title = "BACK UP";
	}
}]);