import '../../app';

describe('Technology', () => {
  // Load the application
  beforeEach(angular.mock.module('myAngularApp'));

  // Create sample service response data
  let technologyData = [
    {
      "id": 1,
      "name": "AngularJS",
      "type": "application",
      "version": "1.6.9",
      "license": "MIT",
      "licenseUrl": "https://spdx.org/licenses/MIT.html",
      "description": "AngularJS is a structural framework for dynamic web apps.",
      "url": "https://angularjs.org/"
    }, {
      "id": 4,
      "name": "Webpack",
      "type": "build",
      "version": "3.9.1",
      "license": "MIT",
      "licenseUrl": "https://spdx.org/licenses/MIT.html",
      "description": "Webpack is a static module bundler for modern web applications.",
      "url": "https://webpack.js.org/"
    }, {
      "id": 9,
      "name": "Jasmine",
      "type": "test",
      "version": "2.4.1",
      "license": "MIT",
      "licenseUrl": "https://spdx.org/licenses/MIT.html",
      "description": "Jasmine is a behavior-driven development framework for testing JavaScript code.",
      "url": "https://jasmine.github.io/"
    }
  ];

  // Add a custom equality tester before each test
  beforeEach(() => {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  let $httpBackend,
    Technology;

  // Instantiate the service and mock the underlying service
  beforeEach(angular.mock.inject((_$httpBackend_, _Technology_) => {
    Technology = _Technology_;
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/assets/data/technologies/technologies.json').respond(technologyData);
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch technologies data', () => {
    const technologies = Technology.query();

    expect(technologies).toEqual([]);

    $httpBackend.flush();
    expect(technologies).toEqual(technologyData);
  });

});
