const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  devtool: 'source-map',
  entry: [
    './src/shop/index'],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/public'),
    publicPath: 'http://localhost:8080/public/',
  },
  module: {
    loaders: [
      { test: /\.js$|\.jsx$/, loaders: ['babel-loader', 'eslint-loader'],  exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
              { loader: 'css-loader', options: { minimize: true } },
          ],
        }),
      },
      {
         test: /\.less$/,  loader: ExtractTextPlugin.extract(
        {
          fallback: 'style-loader',  use: [{
            loader: 'css-loader', // translates CSS into CommonJS
          }, {
            loader: 'less-loader', // compiles Less to CSS
          }],
        }),
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=2000',
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader?mimetype=image/png',
      },
      {
        test: /\.(woff|woff2)$/,
          // Inline small woff files and output them below font/.
          // Set mimetype just in case.
        loader: 'url-loader',
        options: {
          name: 'fonts/[hash].[ext]',
          mimetype: 'application/font-woff',
        },
         // include: PATHS.fonts
      },
      {
        test: /\.ttf$|\.eot$|\.svg$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[hash].[ext]',
        },
          // include: PATHS.fonts
      },


    ],
  },

  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.HotModuleReplacementPlugin(),

  ],

};
