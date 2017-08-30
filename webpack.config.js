'use strict';

const path = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const rootPath = '/';
const entryPath = path.join(__dirname, rootPath, '/assets/js/app.jsx');
const outputPath = path.join(__dirname, rootPath, 'dist');
const publicPath = path.join('/', rootPath, 'dist');

const autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    app: entryPath,
  },
  output: {
    path: outputPath,
    filename: '/js/[name].js',
    publicPath,
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            'es2015',
            'react',
          ],
        },
        pathinfo: true,
      },
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract([
          'css?sourceMap',
          'postcss',
          'sass?sourceMap',
        ]),
      },
      {
        test: /fonts\/[^.]+\.(ttf|eot|svg|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file?name=/fonts/[hash].[ext]',
      },
      {
        test: /\.(svg|png|jpg|jpeg)$/,
        loader: 'file?name=/images/[hash].[ext]',
      },
    ],
  },
  postcss: [
    autoprefixer({
      browsers: [
        'last 30 versions',
      ],
    })
  ],
  plugins: [
    new ExtractTextPlugin('/css/[name].css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
  ],
  devtool: 'eval',
};
