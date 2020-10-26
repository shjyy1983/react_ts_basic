/*
 * @Author: SHEN
 * @Date: 2020-01-03 09:49:41
 * @Last Modified by: SHEN
 * @Last Modified time: 2020-10-26 10:14:10
 */

'use strict'
const config = require('./config')
const baseWebpackConfig = require('./webpack.base.conf')
const merge = require('webpack-merge')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 引入清除文件插件

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  entry: {
    MyBox: ["./src/index.tsx"]
  },
  devtool: false,
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  optimization: {
    minimize: false,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: false,
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  externals: {
    'react': 'React',
    // '../../utils': 'utils'
  }
})



module.exports = webpackConfig
