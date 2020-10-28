/*
 * @Author: SHEN
 * @Date: 2020-01-03 09:49:41
 * @Last Modified by: SHEN
 * @Last Modified time: 2020-10-28 22:24:10
 */
'use strict'
const path = require('path')
const config = require('./config')
const baseWebpackConfig = require('./webpack.base.conf')
const merge = require('webpack-merge')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  entry: {
    app: ["./src/app.tsx"]
  },
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, '../dist-demo'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'react_ts_basic'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        sourceMap: true,
        extractComments: false
      }),
      new OptimizeCSSAssetsPlugin({}),
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[id].[contenthash].css'
    }),
    new HtmlWebPackPlugin({
      title: 'react_ts',
      template: "index.ejs",
      filename: "index.html",
      isProdEnv: false,
      inject: true
    }),
    // new BundleAnalyzerPlugin()
  ]
})

module.exports = webpackConfig
