import angular from 'angular';
import 'angular-route';
import 'angular-animate';
import 'angular-resource';
import 'angular-sanitize';

import './core/core.module';
import './footer/footer.module';
import './header/header.module';
import './landing/landing.module';
import './technology/technology.module';
import './stack/stack.module';

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
