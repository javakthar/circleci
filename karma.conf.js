'use strict';

module.exports = function(config) {

  config.set({
    autoWatch : false,

    files: [
      'src/**/*.js',
    ],

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
        'karma-phantomjs-launcher',
        'karma-jasmine',
        'karma-coverage'
    ],

    reporters: ['progress', 'coverage'],

    preprocessors: {
      'src/**/!(*spec.js)': ['coverage']
    },

    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    }

  });
};
