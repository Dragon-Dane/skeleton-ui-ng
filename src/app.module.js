const angular = require('angular');
require('angular-route');
require('angular-animate');
require('angular-resource');
require('angular-sanitize');

require('./core/core.module');
require('./footer/footer.module');
require('./header/header.module');
require('./landing/landing.module');
require('./technology/technology.module');
require('./stack/stack.module');

angular.module('myAngularApp', [
  'ngRoute',
  'ngAnimate',
  'ngResource',
  'ngSanitize',
  'myAngularApp.core',
  'myAngularApp.footer',
  'myAngularApp.header',
  'myAngularApp.landing',
  'myAngularApp.technology',
  'myAngularApp.stack'
]);
