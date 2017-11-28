angular.module('alurapic').controller('PhotosController', function($scope, $http) {

  $scope.photos = [];
  $scope.filter = "";
  $scope.message = '';

  $http.get('v1/fotos')
    .success(function(photos) {
      $scope.photos = photos;
    })
    .error(function(err) {
      console.log(err);
    });

  $scope.remove = function(photo) {
    $http.delete('v1/fotos/' + photo._id)
      .success(function() {
        var photoIndex = $scope.photos.indexOf(photo);
        $scope.photos.splice(photoIndex, 1);
        $scope.message = 'Foto ' + photo.titulo + ' foi removido com sucesso';
      })
      .error(function(error) {
        console.log(error);
        $scope.message = 'Não foi possível remover a foto ' + photo.titulo;
      });
  }

});