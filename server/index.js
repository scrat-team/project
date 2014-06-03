var info = require('../package.json');

var express = require('express');
var combo = require('./combo.js');
var proxy = require('./proxy.js');
var rewrite = require('./rewrite.js');
var path = require('path');

//document root
var root = path.join(__dirname, '../').replace(/\/+$/, '');
var port = process.env.PORT || 8082;

//express app
var app = express();
//static
app.get(express.static(root + '/public'));
//combo
app.get(combo(root + '/public/c'));
//pages
app.get(rewrite(root + '/public/' + info.name + '/' + info.version));
//http proxy
app.use(proxy('http://hao.uc.cn'));
//start
app.listen(port);
//debug
console.log(' ➜ listening at [%s]', port);