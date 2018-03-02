const angular = require('angular');

import LandingController from './landing.controller';

const landingModule = angular.module('myAngularApp.landing', []);

landingModule.component('landing', {
  template: require('./landing.template.html'),
  controller: LandingController
});

export default landingModule;
