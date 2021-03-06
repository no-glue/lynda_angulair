function DestinationsCtrl($scope, Airport) {
  $scope.setActive('destinations');
  $scope.sidebarPartial = 'html/airport.html';
  $scope.currentAirport = null;
  $scope.setAirport = function(code) {
    $scope.currentAirport = Airport.get({airportCode: code});
  };
  $scope.airports = Airport.query();
}
