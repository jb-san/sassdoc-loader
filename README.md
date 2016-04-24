# sassdoc-loader

[![Build Status](https://travis-ci.org/domjtalbot/scsslint-loader.svg?branch=master)](https://travis-ci.org/domjtalbot/sassdoc-loader) [![npm version](https://badge.fury.io/js/scsslint-loader.svg)](https://badge.fury.io/js/sassdoc-loader)
> Webpack loader for [sassdoc](https://github.com/SassDoc/sassdoc)

## [Install](https://www.npmjs.com/package/@domjtalbot/sassdoc-loader)

```console
$ npm install @domjtalbot/sassdoc-loader
```

## Usage
[Documentation: using loaders](http://webpack.github.io/docs/using-loaders.html)

Within your webpack configuration, you'll need to add the sassdoc-loader to the list of modules:

```javascript
module.exports = {
  // ...
  module: {
    postLoaders: [
      {
          test: /\.scss$/,
          loader: "sassdoc",
          exclude: /node_modules/
      }
    ]
  }
  // ...
}
```
