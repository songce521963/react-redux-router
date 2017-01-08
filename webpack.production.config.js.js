var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    index: [
      path.resolve(__dirname,'src/index.js')
    ]
  },
  output: {
    filename: '[chunkhash].js',
    path: path.resolve(__dirname,'public'),
    chunkFilename: '[chunkhash].js',
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['react-hot','babel']
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      loader:  ExtractTextPlugin.extract("style-loader","css-loader")
    },{
      test: /\.scss$/,
      exclude: /node_modules/,
      loader:  ExtractTextPlugin.extract("style-loader","css-loader","postcss-loader")
    }]
  },
  plugins: [
    //清除
    new WebpackCleanupPlugin(),
    //设置环境变量
    new webpack.DefinePlugin({
      'process.env': {
         NOOE_DEV : JSON.stringify("production")
      }
    }),
    //压缩文件
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        drop_console: true,
        drop_debugger: true
      }
    }),
    //为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    new webpack.optimize.OccurenceOrderPlugin(),
    //分离CSS和JS文件
    new ExtractTextPlugin('[contenthash].css', {
      allChunks: true
    }),
    //html魔板
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'src/template.html'),
      title: 'Webpack App'
    }),
    //删除重复的依赖
    new webpack.optimize.DedupePlugin()
  ]
};