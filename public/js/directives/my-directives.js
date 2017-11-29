angular
  .module('myDirectives', [])
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
    });