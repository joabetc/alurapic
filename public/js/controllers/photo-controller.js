angular.module('alurapic').controller('PhotoController', function($scope, $http) {
  
  $scope.photo = {};
  $scope.message = '';

  $scope.submit = function() {
    if ($scope.formulario.$valid) {

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
});