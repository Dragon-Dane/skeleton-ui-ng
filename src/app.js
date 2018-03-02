const angular = require('angular');
require('angular-route');
require('angular-animate');
require('angular-resource');
require('angular-sanitize');

require('./footer/footer.module');
require('./header/header.module');

require('bootstrap/dist/css/bootstrap.css');
require('./styles/styles.scss');

const myAngularApp = angular.module('myAngularApp', [
  'ngRoute',
  'ngAnimate',
  'ngResource',
  'ngSanitize',
  'myAngularApp.footer',
  'myAngularApp.header'
]);

myAngularApp.controller('ApplicationController', [() => {
    console.log('> ApplicationController');

    console.log('< ApplicationController');
  }
]);
