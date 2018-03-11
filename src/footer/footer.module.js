import angular from 'angular';

import FooterController from './footer.controller';

const footerModule = angular.module('myAngularApp.footer', []);

footerModule.component('appFooter', {
  template: require('./footer.template.html'),
  controller: FooterController
});

export default footerModule.name;
