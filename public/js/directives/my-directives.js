angular
  .module('myDirectives', ['myServices'])
    .directive('myPanel', function() {

      var ddo = {};

      ddo.restrict = "AE";
      
      ddo.scope = {
        title: '@'
      };

      ddo.transclude = true;

      ddo.templateUrl = 'js/directives/my-panel.html';

      return ddo;
    })
    .directive('myPhoto', function() {
      var ddo = {};

      ddo.restrict = "AE";

      ddo.scope = {
        title: '@',
        url: '@'
      };

      ddo.template = '<img class="img-responsive center-block" ng-src="{{url}}" alt="{{titulo}}">';

      return ddo;
    })
    .directive('myDangerButton', function() {
      var ddo = {};

      ddo.restrict = "E";

      ddo.scope = {
        caption: '@',
        action: '&'
      };

      ddo.template = '<button class="btn btn-danger btn-block" ng-click="action(photo)">{{caption}}</button>';

      return ddo;
    })
    .directive('myFocus', function() {
      var ddo = {}

      ddo.restrict = "A";

      ddo.scope = {
        focused: '='
      };

      ddo.link = function(scope, element) {
        scope.$on('recordedPhoto', function() {
          element[0].focus();
        })
      }

      return ddo;
    })
    .directive('myTitles', function() {
      var ddo = {}

      ddo.restrict = 'E';

      ddo.template = '<ul><li ng-repeat="titulo in titulos">{{titulo}}</li></ul>';

      ddo.controller = function($scope, photoResource) {
        photoResource.query(function(photos) {
          $scope.titulos = photos.map(function(photo) {
            return photo.titulo;
          });
        });
      };

      return ddo;
    });