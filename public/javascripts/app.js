angular.module('airline', [])
	.config(airlineRouter);

function airlineRouter ($routeProvider) {
	$routeProvider
		.when('/', {templateUrl: 'html/destinations.html',
		 controller: function  ($scope) {
		 	$scope.setActive('destinations');
		 }})
		.when('/flights', {template: '<h3>Flights</h3>',
		 controller: function  ($scope) {
		 	$scope.setActive('flights');
		 }})
		.when('/reservations', {template: '<h3>Your Reservations</h3>',
		 controller: function  ($scope) {
		 	$scope.setActive('reservations');
		 }});
}
