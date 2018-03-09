import StackListController from './stack-list.controller';
import StackDetailController from './stack-detail.controller';

const stackModule = angular.module('myAngularApp.stack', ['myAngularApp.core.technology', 'myAngularApp.technology']);

// Configure Module Components
stackModule.component('stackList', {
  template: require('./stack-list.template.html'),
  controller: StackListController
});
stackModule.component('stackDetail', {
  template: require('./stack-detail.template.html'),
  controller: StackDetailController
})

// Configure Module Routes
stackModule.config([
  '$routeProvider', ($routeProvider) => {
    $routeProvider.when('/stacks', {template: '<stack-list></stack-list>'}).when('/stacks/:stackName', {template: '<stack-detail></stack-detail>'});
  }
]);

export default stackModule.name;
