import TechnologyDetailController from './technology-detail.controller';

const technologyModule = angular.module('myAngularApp.technology', ['myAngularApp.core.technology']);

// Configure Module Components
technologyModule.component('technologyDetail', {
  template: require('./technology-detail.template.html'),
  controller: TechnologyDetailController,
  bindings: {
    technology: '<',
    onClose: '&'
  }
})

export default technologyModule.name;
