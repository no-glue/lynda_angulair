angular.module("airline", []).config(AirlineRouter);

var AirlineRouter = function($routeProvider) {
  $routeProvider
    .when("/", {templateUrl: "html/destinations.html"})
    .when("/flights", {template: "<h3>Flights</h3>"})
    .when("/reservations", {template: "<h3>Your reservations</h3>"});
};
