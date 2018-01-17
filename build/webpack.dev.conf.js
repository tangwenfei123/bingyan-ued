var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    loaders: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      chunks:['index']
    }),
    new HtmlWebpackPlugin({
      filename: 'user.html',
      template: 'user.html',
      inject: true,
      chunks:['user']
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: 'login.html',
      inject: true,
      chunks:['login']
    }),
    new HtmlWebpackPlugin({
      filename: 'random.html',
      template: 'random.html',
      inject: true,
      chunks:['random']
    }),
    new HtmlWebpackPlugin({
      filename: 'extension.html',
      template: 'extension.html',
      inject: true,
      chunks:['extension']
    }),
    new HtmlWebpackPlugin({
      filename: 'new.html',
      template: 'new.html',
      inject: true,
      chunks:['new']
    }),
    new HtmlWebpackPlugin({
      filename: 'admin.html',
      template: 'admin.html',
      inject: true,
      chunks:['admin']
    }),
    new HtmlWebpackPlugin({
      filename: 'mobile.html',
      template: 'mobile.html',
      inject: true,
      chunks:['mobile']
    })
  ]
})
