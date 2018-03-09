require('./technology/technology.module');

const coreModule = angular.module('myAngularApp.core', ['myAngularApp.core.technology']);

export default coreModule.name;
