angular.module('alurapic').controller('PhotoController', function($scope, photoResource, $routeParams) {
  
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
      if ($scope.photo._id) {

        photoResource.update({photoId: $scope.photo._id}, $scope.photo, function() {
          $scope.message = 'A foto ' + $scope.photo._id + ' foi alterada com sucesso';
        }, function(error) {
          $scope.message = 'Não foi possível alterar a foto ' + $scope.foto.titulo;
          console.log(error);
        });
      } else {
        photoResource.save($scope.photo, function() {
          $scope.photo = {};
          $scope.message = 'Foto incluída com sucesso';
        }, function(error) {
          $scope.message = 'Não foi possível incluir a foto';
          console.log(error);
        });
      }
    }
  }
});