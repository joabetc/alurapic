angular.module('alurapic').controller('PhotoController', function($scope, $http, $routeParams) {
  
  $scope.photo = {};
  $scope.message = '';

  if($routeParams.photoId) {
    $http.get('v1/fotos/' + $routeParams.photoId)
      .success(function(photo) {
        $scope.photo = photo;
      })
      .error(function(error) {
        console.log(error);
        $scope.message = 'Não foi possível obter a foto';
      });
  }

  $scope.submit = function() {
    if ($scope.formulario.$valid) {
      if ($scope.photo._id) {
        $http.put('v1/fotos/' + $scope.photo._id, $scope.photo)
          .success(function() {
            $scope.photo = {};
            $scope.message = 'A foto ' + $scope.photo._id + ' foi alterada com sucesso';
          })
          .error(function(error) {
            $scope.message = 'Não foi possível alterar a foto ' + $scope.foto.titulo;
            console.log(error);
          });
      } else {
        $http.post('v1/fotos', $scope.photo)
          .success(function() {
            $scope.photo = {};
            $scope.message = 'Foto incluída com sucesso';
          })
          .error(function(error) {
            $scope.message = 'Não foi possível incluir a foto';
            console.log(error);
          });
      }
    }
  }
});