import '../app';

describe('HeaderController', () => {
  // Load the application
  beforeEach(angular.mock.module('myAngularApp'));

  let ctrl;

  beforeEach(angular.mock.inject((_$componentController_) => {
    const $componentController = _$componentController_;
    ctrl = $componentController('appHeader');
  }));

  it('should be defined', () => {
    expect(ctrl).toBeDefined();
  });

});
