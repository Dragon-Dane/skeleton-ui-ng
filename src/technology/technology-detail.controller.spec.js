import '../app';

describe('MyAngularApp.technology', () => {

  // Load the module containing the technology-detail component before each test
  beforeEach(angular.mock.module('myAngularApp'));

  // Test the controller
  describe('TechnologyDetailController', () => {

    let $componentController;

    beforeEach(angular.mock.inject((_$componentController_) => {
      $componentController = _$componentController_;
    }));

    it('should be defined', () => {
      const onCloseSpy = jasmine.createSpy('onClose');
      const technology = {
        id: 1,
        name: "AngularJS",
        type: "application",
        version: "1.6.9",
        license: "MIT",
        licenseUrl: "https://spdx.org/licenses/MIT.html",
        description: "AngularJS is a structural framework for dynamic web apps.",
        url: "https://angularjs.org/"
      };
      const bindings = {
        technology,
        onClose: onCloseSpy
      };
      const ctrl = $componentController('technologyDetail', null, bindings);
      expect(ctrl).toBeDefined();
      expect(ctrl.technology).toEqual(technology)

      ctrl.onClose();
      expect(onCloseSpy).toHaveBeenCalled();
    });

  });

});
