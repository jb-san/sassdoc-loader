# sassdoc-loader

[![Travis](https://img.shields.io/travis/domjtalbot/sassdoc-loader.svg?style=flat-square)](https://travis-ci.org/domjtalbot/sassdoc-loader)
[![npm](https://img.shields.io/npm/v/@domjtalbot/sassdoc-loader.svg?style=flat-square)](https://www.npmjs.com/package/sassdoc-loader)
[![npm](https://img.shields.io/npm/l/sassdoc-loader.svg?style=flat-square)](https://www.npmjs.com/package/sassdoc-loader)

> Webpack loader for [sassdoc](https://github.com/SassDoc/sassdoc)

## [Install](https://www.npmjs.com/package/@domjtalbot/sassdoc-loader)

```console
$ npm install @domjtalbot/sassdoc-loader
```

## Usage
[Documentation: using loaders](http://webpack.github.io/docs/using-loaders.html)

Within your webpack configuration, you'll need to add the sassdoc-loader to the list of modules.
As the current version of webpack doesn't look for scoped packages, sassdoc-loader needs to be referenced with its full name.

```javascript
module.exports = {
  // ...
  module: {
    postLoaders: [
      {
          test: /\.scss$/,
          loader: "@domjtalbot/sassdoc-loader",
          exclude: /node_modules/
      }
    ]
  }
  // ...
}
```

## Configuration
```javascript
module.exports = {
  // ...
  sassdoc: {
      // Output location
      // Default: Sassdoc default
      dest: String,

      // Configuration file
      // Default: null
      config: String,

      // Specify a theme
      // Default: null
      theme: String,

      // File/files to parse
      // Default: Webpack input
      entry: String,
  },
  // ...
}
```

## Example webpack.config
```javascript
module.exports = {
    entry: {
        app: './app.js'
    },
    output: {
        path: './public',
    },
    module: {
        preLoaders: [
            {
                test: [/\.scss$/],
                exclude: /(node_modules|bower_components)/,
                loader: 'scsslint'
            }
        ],
        loaders: [
            {
                test: [/\.scss$/],
                exclude: /(node_modules|bower_components)/,
                loader: 'sass'
            }
        ],
        postLoaders: [
            {
                test: [/\.scss$/],
                exclude: /(node_modules|bower_components)/,
                loader: '@domjtalbot/sassdoc-loader'
            }
        ]
    }
    sassdoc: {
        entry: './assets/scss/*.scss .assets/scss/**/*.scss',
        config: '.sassdoc.yml'
    },
};
```
