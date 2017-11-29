angular.module('alurapic').controller('PhotosController', function($scope, $http, $resource) {

  $scope.photos = [];
  $scope.filter = "";
  $scope.message = '';

  var photoResource = $resource('v1/fotos/:photoId');

  photoResource.query(function(photos) {
    $scope.photos = photos;
  }, function(error) {
    console.log(error);
  });

  $scope.remove = function(photo) {

    photoResource.delete({photoId: photo._id}, function() {
      var photoIndex = $scope.photos.indexOf(photo);
      $scope.photos.splice(photoIndex, 1);
      $scope.message = 'Foto ' + photo.titulo + ' foi removido com sucesso';
    }, function(error) {
      console.log(error);
      $scope.message = 'Não foi possível remover a foto ' + photo.titulo;
    });

  }

});