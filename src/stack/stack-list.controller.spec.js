// import stackListComponent from './stack.module';
//
// describe('stackList', () => {
//
//   // Load the module containing the stackList component before each test
//   beforeEach(angular.mock.module(stackListComponent));
//
//   // Test the controller
//   describe('StackListController', () => {
//     let $httpBackend,
//       ctrl;
//
//     beforeEach(angular.mock.inject(($rootScope, $componentController, _$httpBackend_) => {
//       const $scope = $rootScope.$new();
//       $httpBackend = _$httpBackend_;
//       $httpBackend.expectGET('/assets/data/technologies/technologies.json').respond([
//         {
//           "id": 1,
//           "name": "AngularJS",
//           "type": "application",
//           "version": "1.6.9",
//           "license": "MIT",
//           "licenseUrl": "https://spdx.org/licenses/MIT.html",
//           "description": "AngularJS is a structural framework for dynamic web apps.",
//           "url": "https://angularjs.org/"
//         }, {
//           "id": 2,
//           "name": "Bootstrap",
//           "type": "application",
//           "version": "4.0.0",
//           "license": "MIT",
//           "licenseUrl": "https://spdx.org/licenses/MIT.html",
//           "description": "Bootstrap is an open source toolkit for developing with HTML, CSS, and JS.",
//           "url": "https://getbootstrap.com/"
//         }
//       ]);
//
//       ctrl = $componentController('stackList', { $scope });
//     }));
//
//     it('should create a applicationStack property', () => {
//       jasmine.addCustomEqualityTester(angular.equals);
//
//       expect(1).toEqual(1);
//
//       // expect(ctrl.applicationStack).toEqual([]);
//       //
//       //   $httpBackend.flush();
//       //   expect(ctrl.applicationStack).toEqual([
//       //     {
//       //       "id": 1,
//       //       "name": "AngularJS",
//       //       "type": "application",
//       //       "version": "1.6.9",
//       //       "license": "MIT",
//       //       "licenseUrl": "https://spdx.org/licenses/MIT.html",
//       //       "description": "AngularJS is a structural framework for dynamic web apps.",
//       //       "url": "https://angularjs.org/"
//       //     }, {
//       //       "id": 2,
//       //       "name": "Bootstrap",
//       //       "type": "application",
//       //       "version": "4.0.0",
//       //       "license": "MIT",
//       //       "licenseUrl": "https://spdx.org/licenses/MIT.html",
//       //       "description": "Bootstrap is an open source toolkit for developing with HTML, CSS, and JS.",
//       //       "url": "https://getbootstrap.com/"
//       //     }
//       //   ]);
//     });
//
//   });
//
// });
