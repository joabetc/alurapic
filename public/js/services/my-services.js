angular.module('myServices', ['ngResource'])
  .factory('photoResource', function($resource) {
    return $resource('v1/fotos/:photoId', null, {
      update: {
        method: 'PUT'
      }
    });
  })
  .factory('photoRegistration', function(photoResource, $q, $rootScope) {
    var service = {};

    var event = 'recordedPhoto';

    service.insert = function(photo) {
      return $q(function(resolve, reject) {
        
        if(photo._id) {
          
          photoResource.update({photoId: photo._id}, photo, function() {
            $rootScope.$broadcast('recordedPhoto');
            resolve({
              message: 'Foto ' + photo.titulo + ' atualizada com sucesso!',
              insertion: false
            });
          }, function(error) {
            console.log(error);
            reject({
              message: 'Não foi possível alterar a foto ' + photo.titulo
            });
          });

        } else {

          photoResource.save(photo, function() {
            $rootScope.$broadcast('recordedPhoto');
            resolve({
              message: 'Foto ' + photo.titulo + ' incluída com sucesso!',
              insertion: true
            }, function(erro) {
              console.log(error);
              reject({
                message: 'Não foi possível incluir a foto ' + photo.titulo
              });
            });
          })
        }
      });
    };

    return service;
  });