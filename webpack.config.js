'use strict';
const path = require('path');

module.exports = {
  debug: true,
  devtool: 'sourcemap',
  entry: './src/index.ts',
  errorDetails: true,
  module: {
    loaders: [
      {
        loaders: [
          require.resolve('ts-loader')
        ],
        test: /\.(ts|tsx)$/
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  }
};
