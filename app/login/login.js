'use strict';

angular.module('loginApp', [])
.controller('loginController', loginController);

function loginController($location, AuthenticationService) {
		var vm = this;
		
		vm.login = login;
		
		initController();
		
		function initController() {
			// reset login status
			AuthenticationService.Logout();
		};
		
		function login() {
			vm.loading = true;
			
			AuthenticationService.Login(vm.username, vm.password, function (result) {
				if (result === true) {
					$location.path('/');
				} else {
					vm.error = 'Username or password is incorrect';
					vm.loading = false;
				}
			});
		};
	}