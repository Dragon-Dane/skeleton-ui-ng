const angular = require('angular');
require('angular-route');
require('angular-animate');
require('angular-resource');
require('angular-sanitize');

require('./styles/styles.scss');

const myAngularApp = angular.module('myAngularApp', ['ngRoute', 'ngAnimate', 'ngResource', 'ngSanitize']);

myAngularApp.controller('ApplicationController', [
  '$rootScope',
  '$scope',
  '$interval',
  ($rootScope, $scope, $interval) => {
    console.log('> ApplicationController');

    $scope.currentDate = new Date();
    const currentDateInterval = $interval(() => {
      $scope.currentDate = new Date();
    }, 5000);

    $scope.$on('$destroy', () => {
      console.log(' destroying ApplicationController scope');
      if (currentDateInterval) {
        console.log('  cancelling currentDateInterval');
        $interval.cancel(currentDateInterval);
      }
    });

    console.log('< ApplicationController');
  }
]);
