'use strict';

angular.module('detailListApp', [])
	.controller('detailListCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
		//TODO GET
		$scope.detailList = $rootScope.detailList;
}]);