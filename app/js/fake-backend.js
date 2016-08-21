'use strict';

angular.module('bakcEnd', [])
	.run(setUpFakeBackEnd);

function setUpFakeBackEnd($httpBackend) {
	var testUser = {
		username: 'test',
		password: 'test',
		firstName: 'test',
		lastName: 'test'
	}
	
	$httpBackend.whenPOST('/api/authenticate')
		.respond(function (method, url, data) {
			console.log("invoke...");
			var params = angular.fromJson(data);
			console.log(params);
			if (params.username === testUser.username
				&& params.password === testUser.password) {
				console.log("success");
				return [200, {token: 'fake-jwt-token'}, {}];
			} else {
				return [200, {}, {}];
			}
		});
		
	$httpBackend.whenGET(/^\w+.*/).passThrough();
}
