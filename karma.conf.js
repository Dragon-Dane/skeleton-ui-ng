//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './src',

    files: [
      '../node_modules/angular/angular.js',
      '../node_modules/angular-animate/angular-animate.js',
      '../node_modules/angular-resource/angular-resource.js',
      '../node_modules/angular-route/angular-route.js',
      '../node_modules/angular-mocks/angular-mocks.js',
      '**/*.module.js',
      '*!(.module|.spec).js',
      '!(../node_modules)/**/*!(.module|.spec).js',
      '**/*.spec.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine'
    ]

  });
};
