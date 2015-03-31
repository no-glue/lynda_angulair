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
      template: '<h3>Flights</h3> {{airports | json}}',
		 controller: 'FlightsCtrl'})
		.when('/reservations', {
      template: '<h3>Your Reservations</h3> {{airports | json}}',
		 controller: 'ReservationsCtrl'});
}
