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
  //   fetch('https://lamoda.ru/blackfriday/preparequestions/', {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //         user: {
  //             sku1: req.query.sku1,
  //             sku2: req.query.sku2
  //         }
  //     })
  // });
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify( {
    "status": "OK",
    "products": {
      "TO048AWCTFH0": {
        "images": [
          "\/T\/O\/TO048AWCTFH0_7673498_1_v1.jpg",
          "\/T\/O\/TO048AWCTFH0_7673499_2_v1.jpg",
          "\/T\/O\/TO048AWCTFH0_7673500_3_v1.jpg",
          "\/T\/O\/TO048AWCTFH0_7673501_4_v1.jpg",
          "\/T\/O\/TO048AWCTFH0_7673502_5_v1.jpg",
          "\/T\/O\/TO048AWCTFH0_7689302_9_v1.jpg"
        ],
        "discount": 0,
        "price": 3199.0
      },
      "MA002EWFHCU0": {
        "images": [
          "\/M\/A\/MA002EWFHCU0_8802251_1_v1.jpg",
          "\/M\/A\/MA002EWFHCU0_8802252_2_v1.jpg",
          "\/M\/A\/MA002EWFHCU0_8802253_3_v1.jpg"
        ],
        "discount": 0,
        "price": 1999.0
      },
      "ZE009AWAEFG9": {
        "images": [
          "\/Z\/E\/ZE009AWAEFG9_6061947_1_v2.jpg",
          "\/Z\/E\/ZE009AWAEFG9_6061948_2_v2.jpg",
          "\/Z\/E\/ZE009AWAEFG9_6061949_3_v2.jpg",
          "\/Z\/E\/ZE009AWAEFG9_6061950_4_v2.jpg",
          "\/Z\/E\/ZE009AWAEFG9_6080950_9_v2.jpg"
        ],
        "discount": 759.0,
        "price": 1740.0
      },
      "MP002XW01QX4": {
        "images": [
          "\/M\/P\/MP002XW01QX4_8756051_1_v1.jpg",
          "\/M\/P\/MP002XW01QX4_8756052_2_v1.jpg",
          "\/M\/P\/MP002XW01QX4_8756053_3_v1.jpg"
        ],
        "discount": 0,
        "price": 4990.0
      },
      "MP002XW020OL": {
        "images": [
          "\/M\/P\/MP002XW020OL_8751557_1_v1.jpg",
          "\/M\/P\/MP002XW020OL_8751558_2_v1.jpg",
          "\/M\/P\/MP002XW020OL_8751559_3_v1.jpg"
        ],
        "discount": 0,
        "price": 6500.0
      },
      "MP002XW01QX1": {
        "images": [
          "\/M\/P\/MP002XW01QX1_8756042_1_v1.jpg",
          "\/M\/P\/MP002XW01QX1_8756043_2_v1.jpg",
          "\/M\/P\/MP002XW01QX1_8756044_3_v1.jpg"
        ],
        "discount": 0,
        "price": 4990.0
      }
    }
  }, null, 3));
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