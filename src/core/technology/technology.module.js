const coreTechnologyModule = angular.module('myAngularApp.core.technology', ['ngResource']);

// Configure Module Services
coreTechnologyModule.factory('Technology', ['$resource', ($resource) => {
  return $resource('/assets/data/technologies/:technologyId.json', {}, {
    query: {
      method: 'GET',
      params: {technologyId: 'technologies'},
      isArray: true
    }
  });
}]);

export default coreTechnologyModule;
