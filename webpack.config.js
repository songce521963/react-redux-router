var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8888";
const URL = 'http://'+HOST+':'+PORT+'/webpack-dev-server/';

module.exports = {
  devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
  entry: {
    index: [
      path.resolve(__dirname,'src/index.js')
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname,'public'),
    publicPath: '/'  // 发布目录  
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
      loaders: ['style','css','postcss']
    },{
      test: /\.scss$/,
      exclude: /node_modules/,
      loaders: ['style','css','sass','postcss']
    }]
  },
  devServer: {
    contentBase: path.resolve(__dirname,'public'),
    // do not print bundle build stats
    noInfo: true,
    // enable HMR
    hot: true,
    // embed the webpack-dev-server runtime into the bundle
    inline: true,
    // serve index.html in place of 404 responses to allow HTML5 history
    historyApiFallback: true,
    port: PORT,
    host: HOST
  },
  plugins: [
    //系统环境变变量
    new webpack.DefinePlugin({
      'process.env': {
         NOOE_DEV : JSON.stringify("development")
      }
    }),
    //热部署
    new webpack.HotModuleReplacementPlugin(),
    //跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误
    new webpack.NoErrorsPlugin(),
    //魔板
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'src/template.html'),
    }),
    //自动打开页面
    new OpenBrowserPlugin({ url: URL }),
  ]
};