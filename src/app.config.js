angular.module('myAngularApp').config([
  '$locationProvider',
  '$routeProvider',
  ($locationProvider, $routeProvider) => {
    $locationProvider.html5Mode(true);

    $routeProvider.otherwise({redirectTo: '/landing'});
  }
]);
