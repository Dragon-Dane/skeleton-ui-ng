const webpack = require('./webpack.dev.js');

module.exports = function(config) {
  config.set({

    basePath: '',
    frameworks: ['jasmine'],

    files: [
      './src/index.specs.js'
    ],

    preprocessors: {
      './src/index.specs.js': ['webpack'],
      './src/**/*.spec.js': ['webpack']
    },

    webpack,

    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only'
    },

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    concurrency: Infinity

  });
};
