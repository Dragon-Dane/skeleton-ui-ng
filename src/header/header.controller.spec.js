import '../app';

describe('header', () => {

  // Load the module containing the header component before each test
  beforeEach(angular.mock.module('myAngularApp'));

  // Test the controller
  describe('HeaderController', () => {
    let ctrl;

    beforeEach(angular.mock.inject((_$componentController_) => {
      const $componentController = _$componentController_;
      ctrl = $componentController('appHeader');
    }));

    it('should be defined', () => {
      expect(ctrl).toBeDefined();
    });

  });

});
