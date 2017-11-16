angular.module('alurapic').controller('PhotosController', function($scope, $http) {

  $scope.photos = [];

  $http.get('v1/fotos').success(function(photos) {
    $scope.photos = photos;
  }).error(function(err) {
    console.log(err);
  });

  /*var promise = $http.get('v1/fotos');
  promise.then(function(ret) {
    $scope.photos = ret.data;
  }).catch(function(err) {
    console.log(err);
  });*/

});