

angular
  .module('app')
  .controller('PassengerController', ['$scope', '$state', 'Passenger', function($scope,
      $state, Passenger) {
    $scope.passengers = [];
    $scope.numberOfPassenger = 0;
    function getPassengers() {
      Passenger
        .find()
        .$promise
        .then(function(results) {
          debugger;
          $scope.passengers = results;
          $scope.numberOfPassenger = results.length;
        });
    }
    getPassengers();

    $scope.addPassenger = function() {
      Passenger
        .create($scope.newPassenger)
        .$promise
        .then(function(todo) {
          $scope.newPassenger = '';
          $scope.passengerForm.content.$setPristine();
          $('.focus').focus();
          getPassengers();
        });
    };

    $scope.removePassenger = function(item) {
      Passenger
        .deleteById(item)
        .$promise
        .then(function() {
          getPassengers();
        });
    };
  }]);
