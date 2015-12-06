app.controller('ButtonsCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.toggleState = function(device) {
    $scope.appState[device] = !$scope.appState[device];
    var api = 'api/state/' + device;
    $http.post(api).success(function(data) {
      socket.emit('broadcast_states', data);
      console.log('Success post', data);
    });
  };

  $http.get('api/state').success(function(data) {
    console.log('success call', data);
    $scope.appState = data;
  });

  socket.on('broadcast_states', function(data) {
    $http.get('api/state').success(function(data) {
      $scope.appState = data;
    });
  });


}]);
