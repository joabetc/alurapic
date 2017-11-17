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
    });