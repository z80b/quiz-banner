const fs = require('fs');
const https = require('https')
//https.globalAgent.options.ca = require('ssl-root-cas/latest').create();
const data = JSON.stringify({
  sku1: 'MP002XW0E06D',
  sku2: 'MP002XW01QX4'
});

const options = {
  hostname: 'lamoda.test',
  rejectUnauthorized: false,
  port: 443,
  path: '/blackfriday/preparequestions/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
  key: fs.readFileSync('/usr/local/etc/nginx/ssl/fe_server.key'),
  cert: fs.readFileSync('/usr/local/etc/nginx/ssl/fe_server.crt')
};

const req = https.request(options, (res) => {
  //console.log(`statusCode: ${res.statusCode}`, res);

  res.on('data', (d, e) => {
    //process.stdout.write(d)
    console.log('data:', d, e);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.write(data);
req.end();
