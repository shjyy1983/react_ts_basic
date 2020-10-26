/*
 * @Author: SHEN
 * @Date: 2020-01-03 09:31:33
 * @Last Modified by: SHEN
 * @Last Modified time: 2020-10-26 10:29:53
 */
'use strict'
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require('path')
const config = require('./config') // 基本配置的参数
const baseWebpackConfig = require('./webpack.base.conf') // webpack基本配置文件（开发和生产环境公用部分）
const merge = require('webpack-merge') // webpack-merge是一个可以合并数组和对象的插件
const portfinder = require('portfinder') // 自动检索下一个可用端口
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin') // friendly-errors-webpack-plugin用于更友好地输出webpack的警告、错误等信息

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT) // 读取系统环境变量的port

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  entry: {
    app: ["./demo/app.tsx"]
  },
  devtool: config.dev.devtool,
  devServer: {
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    contentBase: false, // since we use CopyWebpackPlugin.
    hot: true, // 开启热模块加载
    quiet: true,
    clientLogLevel: 'warning', // console 控制台显示的消息，可能的值有 none, error, warning 或者 info
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    overlay: config.dev.errorOverlay ? { warnings: false, errors: true } : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable, // 代理设置
    watchOptions: { // 启用 Watch 模式。这意味着在初始构建之后，webpack 将继续监听任何已解析文件的更改
      poll: config.dev.poll, // 通过传递 true 开启 polling，或者指定毫秒为单位进行轮询。默认为false
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'React_TS',
      template: "index.ejs",
      filename: "index.html",
      isProdEnv: false,
      inject: true
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: true
      }))

      resolve(devWebpackConfig)
    }
  })
})