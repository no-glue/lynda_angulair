angular.module('airline', ['airlineServices'])
	.config(airlineRouter);

function airlineRouter ($routeProvider) {
	$routeProvider
		.when('/', {
      templateUrl: 'html/destinations.html',
		 controller: 'DestinationsCtrl'})
    .when('/airports/:airportCode', {
      templateUrl: 'html/airport.html', 
      controller: 'AirportCtrl'})
		.when('/flights', {
      templateUrl: 'html/flights.html',
		 controller: 'FlightsCtrl'})
		.when('/reservations', {
      templateUrl: 'html/reservations.html',
		 controller: 'ReservationsCtrl'});
}
