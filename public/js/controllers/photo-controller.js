angular.module('alurapic').controller('PhotoController', function($scope, photoRegistration, photoResource, $routeParams) {
  
  $scope.photo = {};
  $scope.message = '';

  if($routeParams.photoId) {

    photoResource.get({photoId: $routeParams.photoId}, function(photo) {
      $scope.photo = photo;
    }, function(error) {
      console.log(error);
      $scope.message = 'Não foi possível obter a foto';
    });
  }

  $scope.submit = function() {

    if ($scope.formulario.$valid) {
      
      photoRegistration.insert($scope.photo)
        .then(function(data) {
          $scope.message = data.message;
          if (data.insertion) $scope.photo = {};
        })
        .catch(function(data) {
          $scope.message = data.message;
        });
    }
  }
});