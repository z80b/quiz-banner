const webpack           = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path              = require('path');

module.exports = {
  mode: 'development',
  entry: [
    'babel-polyfill',
    __dirname + "/src/index.js",  // webpack entry point. Module to start building dependency graph
  ],
  output: {
    path: __dirname + "/dist/", // Folder to store generated bundle
    filename: "bundle.js", // Name of generated bundle after build
    publicPath: '/',
    //publicPath: __dirname + "/build/" // public URL of the output directory when referenced in a browser
  },

  resolve: {
		extensions: ['.mjs', '.js', '.svelte'],
		mainFields: ['svelte', 'browser', 'module', 'main'],
    // root: path.resolve(__dirname, 'src'),
    alias: {
      "@": path.resolve(__dirname, 'src'),
      "@js": path.resolve(__dirname, 'src/js'),
      "@css": path.resolve(__dirname, 'src/css'),
    }
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [['env', { targets: { browsers: ['last 2 versions'] } }]]
          },
        },
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "stylus-loader" // compiles Stylus to CSS
        ]
      },
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader',
          options: {
						emitCss: true,
						hotReload: true
          }
        }
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
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html'
    })
  ]
};