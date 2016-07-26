app.controller("HitchBikeController", ['$scope', 'HitchBikeService', '$location', function($scope, HitchBikeService, $location){
  $scope.view = {};

  HitchBikeService.bikes().then(function(data) {
    console.log(data);
    $scope.view.bikes = data.data;
  });

  HitchBikeService.requestedbikes().then(function(data) {
    console.log(data);
    $scope.view.requestedBikes = data.data;
  });

  HitchBikeService.users().then(function(data) {
    $scope.view.users = data.data;
  });

  $scope.view.signIn = function() {
    HitchBikeService.signIn($scope.view.username, $scope.view.password);
    $location.path('/bikes');
  }

  $scope.view.signUp = function() {
    HitchBikeService.signUp($scope.view.users, $scope.view.usernameSignup, $scope.view.passwordSignup, $scope.view.emailSignup, $scope.view.street_addressSignup, $scope.view.citySignup, $scope.view.stateSignup, $scope.view.zip_codeSignup)
  }

}]);

app.controller("BikesSearchController", ['$scope', 'HitchBikeService', '$location', '$routeParams', function($scope, HitchBikeService, $location, $routeParams){
  $scope.view = {};

  HitchBikeService.searchBikes($routeParams.location).then(function(data) {
    console.log(data);
    $scope.view.bikes = data.data;
  })

  HitchBikeService.requestedbikes().then(function(data) {
    console.log(data);
    $scope.view.requestedBikes = data.data;
  });

  HitchBikeService.users().then(function(data) {
    $scope.view.users = data.data;
  });

  $scope.view.signIn = function() {
    HitchBikeService.signIn($scope.view.username, $scope.view.password);
    $location.path('/bikes');
  }

  $scope.view.signUp = function() {
    HitchBikeService.signUp($scope.view.users, $scope.view.usernameSignup, $scope.view.passwordSignup, $scope.view.emailSignup, $scope.view.street_addressSignup, $scope.view.citySignup, $scope.view.stateSignup, $scope.view.zip_codeSignup)
  }

}]);

app.controller("BikesSearchDateController", ['$scope', 'HitchBikeService', '$location', '$routeParams', function($scope, HitchBikeService, $location, $routeParams){
  $scope.view = {};

  HitchBikeService.requestedbikes().then(function(data) {
    // console.log(data);
    $scope.view.requestedBikes = data.data;
  });

  HitchBikeService.searchBikesDate($routeParams.location, $routeParams.startTime, $routeParams.endTime).then(function(data) {
    // console.log(data);
    $scope.view.bikes = data.data;
    // for(var i=0, j=0; i<$scope.view.bikes, j<$scope.view.requestedBikes; i++, j++) {
    //   if($scope.view.bikes[i].id === $scope.view.requestedBikes[j].bike_id) {
    //     console.log(data);
    //   }
    // }
  })



  HitchBikeService.users().then(function(data) {
    $scope.view.users = data.data;
  });

  $scope.view.signIn = function() {
    HitchBikeService.signIn($scope.view.username, $scope.view.password);
    $location.path('/bikes');
  }

  $scope.view.signUp = function() {
    HitchBikeService.signUp($scope.view.users, $scope.view.usernameSignup, $scope.view.passwordSignup, $scope.view.emailSignup, $scope.view.street_addressSignup, $scope.view.citySignup, $scope.view.stateSignup, $scope.view.zip_codeSignup)
  }

}]);
