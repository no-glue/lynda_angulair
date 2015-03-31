function AirportCtrl($scope, $routeParams) {
  $scope.currentAirport = $scope.airports[$routeParams.airportCode];
  console.debug($scope.currentAirport, $scope.airports, $routeParams.airportCode);
};
