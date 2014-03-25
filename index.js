var info = require('./package.json');
var name = info.name;
var version = info.version;

//requires
var path = require('path');
var http = require('http');
var fs = require('fs');
var express = require('express');
var request = require('request');

//app
var app = express();

//static
app.use(express.static(__dirname + '/public'));

//index
app.get('/', function(req, res){
    if(req.url[1] === '?' && req.url[2] === '?'){ //combo
        var files = req.url.substring(3).split(',');
        var content = '';
        for(var i = 0, len = files.length; i < len; i++){
            var file = __dirname + '/public/c/' + files[i];
            if(fs.existsSync(file)){
                content += fs.readFileSync(file, {encoding:'utf8'});
            } else {
                res.send(404, 'Not Found File [' + files[i] + ']');
                return;
            }
        }
        if(/\.css$/i.test(req.url)){
            res.set('Content-Type', 'text/css');
        } else if(/\.js$/i.test(req.url)){
            res.set('Content-Type', 'text/javascript');
        } else {
            res.set('Content-Type', 'text/plain');
        }
        res.send(content);
    } else if(req.url === '/favicon.ico') {       //favicon.ico
        res.send(404);
    } else {
        res.sendfile(__dirname + '/public/' + name + '/' + version + '/index.html');
    }
});

//combo


//proxy
app.use(function(req, res){
    req.pipe(request('http://hao.uc.cn' + req.url)).pipe(res);
});

app.listen(process.env.PORT || 8082);