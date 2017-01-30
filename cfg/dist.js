let path = require('path');
let webpack = require('webpack');
let _ = require('lodash');

let baseConfig = require('./distBase');

// Add needed plugins here
let BowerWebpackPlugin = require('bower-webpack-plugin');

let ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = _.merge({
  entry: path.join(__dirname, '../src/run'),
  cache: false,
  devtool: 'sourcemap',
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false,
      mangle: {
        except: ['$'],
        except: ['webpackJsonp'],
        screw_ie8: true,
        keep_fnames: true
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('style.css')
  ]
}, baseConfig);

config.module.loaders.push(
  {
    test: /\.(js|jsx)$/,
    loader: 'babel',
    include: path.join(__dirname, '/../src')
  },
  {
    test:/\.scss$/,
    loader: ExtractTextPlugin.extract(['style', 'css', 'autprefixer', 'sass']),
    include: path.join(__dirname,'../src/styles/')
  }
);

module.exports = config;
