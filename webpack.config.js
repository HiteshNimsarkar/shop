var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  devtool: 'source-map',
  entry: [
   
   './src/shop/index'],
  externals: {
  'cheerio': 'window',
  'react/addons': 'react',
  'react/lib/ExecutionEnvironment': 'react',
  'react/lib/ReactContext': 'react',
},
 
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/public'),
    publicPath: 'http://localhost:8080/public/'
  },

    resolve: {
     modules: [path.resolve(__dirname, "./src"), "node_modules"],
    // allows you to require without the .js at end of filenames
    // import Component from 'component' vs. import Component from 'component.js'
    extensions: ['.js', '.json', '.jsx']
  },

  
  module: {
    
    loaders: [
     /* {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
        emitWarning: true,
        },
      },*/

      { test: /\.js$/, loaders: ['babel-loader'] ,  exclude: /node_modules/},
     {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [ 
              { loader: 'css-loader', options: { minimize: true } } 
            ]
        })
      },
     
       {
        test: /\.(png|jpg|)$/,
        loader: 'url-loader?limit=200000'
      },
      {
        test: /\.(jpg|png)$/,
      loader: "url-loader?mimetype=image/png"
      },
        {
          test: /\.(woff|woff2)$/,
          // Inline small woff files and output them below font/.
          // Set mimetype just in case.
          loader: 'url-loader',
          options: {
            name: 'fonts/[hash].[ext]',
            limit: 5000,
            mimetype: 'application/font-woff'
          },
         // include: PATHS.fonts
        },
        {
          test: /\.ttf$|\.eot$|\.svg$/,
          loader: 'file-loader',
          options: {
            name: 'fonts/[hash].[ext]'
          },
          //include: PATHS.fonts
        }
     
        
    ]
  },

  plugins: [
   new ExtractTextPlugin('style.css'),
   //new webpack.HotModuleReplacementPlugin()
   
 ]

};
