var webpack = require('webpack');
var config = require('./webpack.config');
var express = require('express');
var path = require('path');
var request = require('request');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  mode: 'development'
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/p/json', function(req, res) {
	if (req.method == 'GET') {
		console.log('https://www.lamoda.ru/apix/catalog/products/?skus=', req.query.skus);
		req
			.pipe(request('https://www.lamoda.ru/apix/catalog/products/?skus=' + req.query.skus))
			.pipe(res);
  }
});

app.use('/blackfriday/preparequestions', function(req, res) {
  if (req.method == 'POST') {
    fetch("https://lamoda.ru/blackfriday/preparequestions/", {
      method: 'POST',
      body: JSON.stringify({ sku1: req.query.sku1, sku2: req.query.sku2 }), // convert Js object to a string
      headers: new Headers({ "Content-Type": "application/json" }) // add headers
    });
  }
});

app.get('*', function(req, res) {
  console.log('Request:', req.url);
	if (req.url != '/p/json' && req.url != '/blackfriday/preparequestions')
		res.sendFile(path.join(config.output.publicPath, req.url));
});



app.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
});