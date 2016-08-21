'use strict';

angular.module('reportsApp', [])
.controller('reportsCtrl', ['$scope', 'ngDialog', function($scope, ngDialog) {
	var vm = this;
	
	initController();
		
	function initController() {
		$("#includedContent").load("main/main.html"); 
		$("#includedTableContent").load("main/reports/table.html"); 
		$scope.title = "REPORTS";
	}
	
	var new_dialog = null;
	
	$scope.printPopUp = function() {
		new_dialog = ngDialog.open({ 
			template: 'printPopUp',
			scope: $scope	
		});
	}
	
}])
.directive('ngPrint', [function() {
	var printSection = document.getElementById('printSection');
	
	if (!printSection) {
		printSection = document.createElement('div');
		printSection.id = 'printSection';
		document.body.appendChild(printSection);
	}
	
	function link(scope, element, attrs) {
		element.on('click', function() {
			printElement(document.getElementById("printThis"));
		});
	}
	
	function printElement(elem) {
		var domClone = elem.cloneNode(true);
		printSection.appendChild(domClone);
		window.print();
	}
	
	return {
		link: link,
		restrict: 'A'
	};
}]);

