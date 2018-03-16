import TechnologyService from './technology.service';

const coreTechnologyModule = angular.module('myAngularApp.core.technology', ['ngResource']);

// Configure Module Services
coreTechnologyModule.service('Technology', TechnologyService);

export default coreTechnologyModule.name;
