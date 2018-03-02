const angular = require('angular');
require('angular-route');
require('angular-animate');
require('angular-resource');
require('angular-sanitize');

require('./footer/footer.module');
require('./header/header.module');
require('./landing/landing.module');
require('./stack/stack.module');

angular.module('myAngularApp', [
  'ngRoute',
  'ngAnimate',
  'ngResource',
  'ngSanitize',
  'myAngularApp.footer',
  'myAngularApp.header',
  'myAngularApp.landing',
  'myAngularApp.stack'
]);
