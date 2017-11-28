angular.module('alurapic').controller('PhotoController', function($scope) {
  
  $scope.photo = {};

  $scope.submit = function() {
    console.log($scope.photo);
  }
});