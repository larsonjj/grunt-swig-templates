/*
 * grunt-swig-templates
 * https://github.com/larsonjj/grunt-swig-templates
 *
 * Copyright (c) 2014 Jake Larson
 * Licensed under the MIT license.
 */

'use strict';

var swig = require('swig');

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('swig', 'Grunt plugin to compile Swig templates to static HTML', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      data: {}
    });

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      // Concat specified files.
      var output = file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {
        // Read file source.
        return {
          source: grunt.file.read(filepath),
          path: filepath
        };
      });

      if (output.length < 1) {
          grunt.log.warn('Destination not written because file were empty.');
      }
      else {
        output.forEach(function(item) {
          var src = swig.render(item.source, {
            filename: item.path,
            locals: options.data
          });

          // Write the destination file.
          grunt.file.write(file.dest, src);

          // Print a success message.
          grunt.log.writeln('File "' + file.dest + '" created.');
        });
      }

    });
  });

};
