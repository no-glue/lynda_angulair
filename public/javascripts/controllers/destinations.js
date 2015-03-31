function DestinationsCtrl($scope, Airport) {
  $scope.setActive('destinations');
  $scope.sidebarPartial = 'html/airport.html';
  $scope.currentAirport = null;
  $scope.setAirport = function(code) {
    $scope.currentAirport = $scope.airports[code];
    console.debug($scope.currentAirport, $scope.airports, code)
  };
  $scope.airports = Airport.query();
}
