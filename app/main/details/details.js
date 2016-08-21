'use strict';

angular.module('detailsApp', [])
.controller('detailsCtrl', ['$scope', '$rootScope', '$localStorage', function($scope, $rootScope, $localStorage) {
	var vm = this;
	
	$scope.details = {
		'ticket_no': 0,
		'customer': "",
		'commodity': "",
		'plate_no': "",
		'driver': "",
		'note': "",
		'date': new Date(),
		'first_weight': 0,
		'second_weight': 0,
		'net_weight': 0,
		'weigher': "",
		'date_in': "",
		'date_out': ""
	};
	$scope.detailList = [];
	
	var temp = {
		'ticket_no': 1,
		'customer': "FURA",
		'commodity': "pit run",
		'plate_no': "DT008",
		'driver': "E.Baccay",
		'note': "Maculango",
		'date': new Date(),
		'first_weight': 1000,
		'second_weight': 2000,
		'net_weight': 1000,
		'weigher': "Ria Kilat",
		'date_in': ".",
		'date_out': "."
		};
	$scope.details = temp;
	
	$scope.trigger = true;
	$scope.weigher = $localStorage.currentUser.username;
	
	$scope.net_weight = 0;
	
	initController();
		
	function initController() {
		$("#includedContent").load("main/main.html"); 
		$("#includedTableContent").load("main/reports/table.html"); 
		$scope.title = "DETAILS";
	}
	
	$scope.addDetail = function(temp) {
		$scope.detailList.push({
			'check': false,
			'ticket_no': temp.ticket_no,
			'customer': temp.customer,
			'commodity': temp.commodity,
			'plate_no': temp.plate_no,
			'driver': temp.driver,
			'note': temp.note,
			'date': temp.date,
			'first_weight': temp.first_weight,
			'second_weight': temp.second_weight,
			'net_weight': $localStorage.currentUser.username,
			'weigher': $scope.weigher,
			'date_in': temp.date_in,
			'date_out': temp.date_out
		});
		
		var temp = {
			'ticket_no': 0,
			'customer': "",
			'commodity': "",
			'plate_no': "",
			'driver': "",
			'note': "",
			'date': new Date(),
			'first_weight': 0,
			'second_weight': 0,
			'net_weight': 0,
			'weigher': "",
			'date_in': "",
			'date_out': ""
		};
		$scope.details = temp;
		
		console.log($scope.detailList);
		
		$rootScope.detailList = $scope.detailList;
		console.log($rootScope.detailList);
		
		//POST
	};
	
	$scope.addFirstWeight = function() {
		console.log("addFirstWeight invoke " + $rootScope.weight);
		$scope.trigger = false;
		$scope.details.first_weight = $rootScope.weight;
	}
	
	$scope.addSecondWeight = function() {
		console.log("addFirstWeight invoke " + $rootScope.weight);
		$scope.details.second_weight = $rootScope.weight;
	}
	
	$scope.netWeightComp = function(first_weight, second_weight) {
		$scope.net_weight = second_weight - first_weight;
	}
	
}]);