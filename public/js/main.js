angular.module('alurapic', ['myDirectives', 'ngAnimate', 'ngRoute'])
  .config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    
    $routeProvider
      .when('/photos', {
        templateUrl: 'partials/principal.html',
        controller: 'PhotosController'
      })
      .when('/photos/new', {
        templateUrl: 'partials/photo.html'
      })
      .otherwise({
        redirectTo: '/photos'
      });

  });