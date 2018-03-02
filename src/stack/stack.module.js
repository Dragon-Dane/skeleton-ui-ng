import StackListController from './stack-list.controller';

const stackModule = angular.module('myAngularApp.stack', ['myAngularApp.core.technology']);

// Configure Module Components
stackModule.component('stackList', {
  template: require('./stack-list.template.html'),
  controller: StackListController
});

// Configure Module Routes
stackModule.config([
  '$routeProvider',
  ($routeProvider) => {
    $routeProvider.when('/stacks', {template: '<stack-list></stack-list>'});
  }
]);

export default stackModule;
