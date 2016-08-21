'use strict';

angular.module('combineModule', ['indexApp',
				'loginApp',
				'bakcEnd',
				'mainApp',
				'ngMessages',
				'ngStorage',
				'ngMockE2E',
				'ui.router',
				'ngRoute',
				'detailsApp',
				'reportsApp',
				'backUpApp',
				'accountApp',
				'aboutApp',
				'detailListApp',
				'ngDialog'])
	.factory('AuthenticationService', Service)
	.config(config);

angular
	.module('indexApp', [])
	.run(run);

function config($stateProvider, $urlRouterProvider) {
	// default route
	$urlRouterProvider.otherwise("/");

	// app routes
	$stateProvider
		.state('details', {
			url: '/',
			templateUrl: 'main/details/details.html',
			controller: 'detailsCtrl',
			controllerAs: 'vm'
		})
		.state('reports', {
			url: '/reports',
			templateUrl: 'main/reports/reports.html',
			controller: 'reportsCtrl',
			controllerAs: 'vm'
		})
		.state('backUp', {
			url: '/backUp',
			templateUrl: 'main/backUp/backUp.html',
			controller: 'backUpCtrl',
			controllerAs: 'vm'
		})
		.state('account', {
			url: '/account',
			templateUrl: 'main/account/account.html',
			controller: 'accountCtrl',
			controllerAs: 'vm'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'main/about/about.html',
			controller: 'aboutCtrl',
			controllerAs: 'vm'
		})
		.state('login', {
			url: '/login',
			templateUrl: 'login/login.html',
			controller: 'loginController',
			controllerAs: 'vm'
		});
}
	
function run($rootScope, $http, $location, $localStorage) {
	// keep user logged in after page refresh
	if ($localStorage.currentUser) {
		$http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
	}

	// redirect to login page if not logged in and trying to access a restricted page
	$rootScope.$on('$locationChangeStart', function (event, next, current) {
		var publicPages = ['/login'];
		var restrictedPage = publicPages.indexOf($location.path()) === -1;
		if (restrictedPage && !$localStorage.currentUser) {
			$location.path('/login');
		}
	});
}

function Service($http, $localStorage) {
	var service = {};
	
	service.Login = Login;
	service.Logout = Logout;
	
	return service;
	
	function Login(username, password, callback) {
		console.log(username);
		console.log(password);
		$http.post('/api/authenticate', {username:username, password:password})
			.success(function(response) {
				console.log(response);
				if (response.token) {
					$localStorage.currentUser = { username: username, token: response.token };
					
					$http.defaults.headers.common.Authorization = 'Bearer ' + response.token;
					
					// execute callback with true to indicate successful login
					callback(true);
				} else {
					callback(false);
				}
			})
	}
	
	function Logout() {
		delete $localStorage.currentUser;
		$http.defaults.headers.common.Authorization = '';
	}
}