angular
  .module('myDirectives', [])
    .directive('myPanel', function() {

      var ddo = {};

      ddo.restric = "AE";
      
      ddo.scope = {
        title: '@'
      };

      ddo.transclude = true;

      ddo.templateUrl = 'js/directives/my-panel.html';

      return ddo;
    })
    .directive('myPhoto', function() {
      var ddo = {};

      ddo.restric = "AE";

      ddo.scope = {
        title: '@',
        url: '@'
      };

      ddo.template = '<img class="img-responsive center-block" ng-src="{{url}}" alt="{{titulo}}">';

      return ddo;
    });