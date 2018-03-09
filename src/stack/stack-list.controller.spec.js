import '../app';

describe('StackListController', () => {
  // Load the application
  beforeEach(angular.mock.module('myAngularApp'));

  let $componentController, ctrl;

  beforeEach(angular.mock.inject((_$componentController_) => {
    $componentController = _$componentController_;
  }));

  it('should be defined', () => {
    ctrl = $componentController('stackList');
    expect(ctrl).toBeDefined();
  });

  it('should retrieve the technology list', () => {
    const querySpy = jasmine.createSpy('query');
    const Technology = {
      query: querySpy
    };
    const $rootScope = {};
    const locals = {
      $rootScope,
      Technology
    };

    ctrl = $componentController('stackList', locals);
    expect(querySpy).toHaveBeenCalled();
  });

});
