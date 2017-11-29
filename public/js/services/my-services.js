angular.module('myServices', ['ngResource'])
  .factory('photoResource', function($resource) {
    return $resource('v1/fotos/:photoId', null, {
      update: {
        method: 'PUT'
      }
    });
  })