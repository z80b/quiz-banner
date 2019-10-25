const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path              = require('path');

module.exports = {
  entry: __dirname + "/src/index.js",  // webpack entry point. Module to start building dependency graph
  output: {
    path: __dirname + "/dist/", // Folder to store generated bundle
    filename: "bundle.js", // Name of generated bundle after build
    //publicPath: __dirname + "/build/" // public URL of the output directory when referenced in a browser
  },

  resolve: {
    extensions: [ ".js", ".jsx" ],
    // root: path.resolve(__dirname, 'src'),
    alias: {
      "@": path.resolve(__dirname, 'src'),
      "@js": path.resolve(__dirname, 'src/js'),
      "@css": path.resolve(__dirname, 'src/css'),
      "@tpl": path.resolve(__dirname, 'src/tpl')
    }
  },

  module: {
    rules: [
      {
        test: /.\js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          query: {
            presets: [
              [
                "@babel/preset-env", {
                  "modules": false,
                  "useBuiltIns": "usage"
               }
              ]
            ],
            ignore: ['*.ejs']
          }
        }
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract([
          'css-loader',
          'stylus-loader'
        ]),
        // use: [
        //   "style-loader", // creates style nodes from JS strings
        //   "css-loader", // translates CSS into CommonJS
        //   "stylus-loader" // compiles Stylus to CSS
        // ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "ejs-template-loader",
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          "file-loader"
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.min.css'),
    new HtmlWebpackPlugin({
      title: "Bannermaker 2.0",
      template: __dirname + "/src/index.html",
      filename: __dirname + "/dist//index.html"
    })
  ]
};