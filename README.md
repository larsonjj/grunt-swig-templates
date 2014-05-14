# grunt-swig-templates

> Grunt plugin to compile Swig templates to static HTML

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-swig-templates --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-swig-templates');
```

## The "swig" task

### Overview
In your project's Gruntfile, add a section named `swig` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  swig: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.data
Type: `Object`
Default value: `{}`

A Object that will get passed into swig templates

### Usage Examples

#### Default Options
In this example, the default options are used to show a very basic grunt configuration that will take and array of `.swig` files and compile them to HTML

```js
grunt.initConfig({
  swig: {
    options: {},
    files: {
      'dest/test.html': ['test.swig'],
    },
  },
})
```

#### Custom Options
In this example, custom options are used to pass custom data to sepecified templates. This also uses the Grunt file expand mapping rather than just using the files object.

```js
grunt.initConfig({
  swig: {
    options: {
      data: {
        title: 'Hello World'
      }
    },
    expand: true,
    cwd: 'templates',
    dest: 'dest/',
    src: ['*.swig'],
    ext: '.html'
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

<strong>v0.1.0</strong> - Initial Release

## License
Copyright (c) 2014 Jake Larson. Licensed under the MIT license.
