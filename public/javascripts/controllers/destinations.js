function DestinationsCtrl($scope) {
  $scope.setActive('destinations');
  $scope.sidebarPartial = 'html/airport.html';
  $scope.currentAirport = null;
  $scope.setAirport = function(code) {
    $scope.currentAirport = $scope.airports[code];
  };
}
