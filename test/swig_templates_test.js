'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.swig_templates = {
  setUp: function (done) {
    // setup here if necessary
    done();
  },
  default_options: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/test.html');
    // var expected = grunt.file.read('test/expected/dashboard_default.html');
    test.ok(actual, 'HTML file should exist');

    test.done();
  },
  custom_options: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/test2.html');
    // var expected = grunt.file.read('test/expected/dashboard_default.html');
    test.ok(actual, 'HTML file should exist');

    test.done();
  }
};
