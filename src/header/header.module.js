import angular from 'angular';

import HeaderController from './header.controller';

const headerModule = angular.module('myAngularApp.header', []);

headerModule.component('appHeader', {
  template: require('./header.template.html'),
  controller: HeaderController
});

export default headerModule.name;
