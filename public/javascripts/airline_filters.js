angular.module('airlineFilters', [])
  .filter('originTitle', function() {
    return function(input) {
      return input.origin + ' - ' + input.originFullName;
    }
  })
  .filter('destinationTitle', function() {
    return function(input) {
      return input.destination + ' - ' + input.destinationFullName;
    }
  });
