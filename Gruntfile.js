/*
 * grunt-swig-templates
 * https://github.com/larsonjj/grunt-swig-templates
 *
 * Copyright (c) 2014 Jake Larson
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    swig: {
      default_options: {
        options: {
        },
        expand: true,
        cwd: 'test/fixtures/',
        dest: 'tmp/',
        src: ['*.swig'],
        ext: '.html'
      },
      custom_options: {
        options: {
          data: {
            content: 'Custom'
          }
        },
        expand: true,
        cwd: 'test/fixtures/',
        dest: 'tmp/',
        src: ['*.swig'],
        ext: '.html'
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'swig', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
