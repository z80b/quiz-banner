const HtmlWebpackPlugin = require("html-webpack-plugin");
const path              = require('path');

module.exports = {
  entry: __dirname + "/src/index.js",  // webpack entry point. Module to start building dependency graph
  output: {
    path: __dirname + "/dist/", // Folder to store generated bundle
    filename: "bundle.js", // Name of generated bundle after build
    //publicPath: __dirname + "/build/" // public URL of the output directory when referenced in a browser
  },
  devServer: {  // configuration for webpack-dev-server
    https: true,
    contentBase: './public',  //source of static assets
    port: 3000, // port to run dev-server
    // historyApiFallback: true,
    proxy: {
      '/blackfriday/preparequestions/': {
        target: 'https://www.lamoda.ru',
        secure: false,
        changeOrigin: true,
        bypass: function(req, res, proxyOptions) {
          console.log(req, res);
        }
      },
      '/p/json/': {
        target: 'https://www.lamoda.ru',
        secure: false,
        changeOrigin: true        
      }
    }
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
        // include: [helpers.root('src')],
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
            ]
          }
        }
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        // include: [helpers.root('src')],
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "stylus-loader" // compiles Stylus to CSS
        ]
      },
      {
        test: /\.html$/,
        use: ["raw-loader"]
      },
      {
        test: /\.hbs$/,
        use: [
          "@icetee/handlebars-loader"
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
    new HtmlWebpackPlugin({
      title: "Bannermaker 2.0",
      template: __dirname + "/src/index.html",
      filename: __dirname + "/dist//index.html"
    })
  ]
};