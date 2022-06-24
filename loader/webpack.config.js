const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  resolveLoader: {
    modules: ['node_modules', './loaders']
  },
  module: {
    rules: [{
      test: /\.js/,
      use: [
        // {
        //   loader: path.resolve(__dirname, './loaders/replaceLoader.js'),
        //   options: {
        //     name: 'hahaha'
        //   }
        // }
        'replaceLoaderSync.js',
        'replaceLoaderAsync.js'
      ]
    }]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
}