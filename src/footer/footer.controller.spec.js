import '../app';

describe('footer', () => {

  // Load the module containing the footer component before each test
  beforeEach(angular.mock.module('myAngularApp'));

  // Test the controller
  describe('FooterController', () => {
    let ctrl;

    beforeEach(angular.mock.inject((_$componentController_) => {
      const $componentController = _$componentController_;
      ctrl = $componentController('appFooter');
    }));

    it('should be defined', () => {
      expect(ctrl).toBeDefined();
    });

  });

});
