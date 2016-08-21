'use strict';

angular.module('accountApp', [])
.controller('accountCtrl', ['$scope', '$localStorage', function($scope, $localStorage) {
	var vm = this;
	
	initController();
		
	function initController() {
		$("#includedContent").load("main/main.html"); 
		$scope.title = "ACCOUNT";
	}
	
	$scope.username = $localStorage.currentUser.username;
}]);