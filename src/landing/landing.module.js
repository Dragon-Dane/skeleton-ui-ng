const angular = require('angular');

import LandingController from './landing.controller';

const landingModule = angular.module('myAngularApp.landing', []);

// Configure Module Components
landingModule.component('landing', {
  template: require('./landing.template.html'),
  controller: LandingController
});

// Configure Module Routes
landingModule.config([
  '$routeProvider',
  ($routeProvider) => {
    $routeProvider.when('/landing', {template: '<landing></landing>'});
  }
]);

export default landingModule;
