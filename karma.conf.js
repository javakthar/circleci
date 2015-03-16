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
        'karma-coverage',
        'karma-junit-reporter'

    ],

    reporters: ['progress', 'coverage','junit'],

    preprocessors: {
      'src/**/!(*spec.js)': ['coverage']

    },

    junitReporter: {
      outputFile: 'aff-results.xml',
      suite: ''
    },

    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    }

  });
};
