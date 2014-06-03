var fs = require('fs');

module.exports = function(root){
    root = root.replace(/\/+$/, '') + '/';
    return function(req, res, next){
        var url = req.url;
        if(url[1] === '?' && url[2] === '?'){   //combo url
            //remove '/??' and '&....'
            url = url.replace(/^\/\?+|&.*$/g, '');
            var files = url.split(',');
            var content = '';
            for(var i = 0, file; file = files[i]; i++){
                file = root + file;
                if(fs.existsSync(file)){
                    content += fs.readFileSync(file, { encoding:'utf8' });
                } else {
                    res.send(404, 'Not Found File [' + file + ']');
                    return;
                }
            }
            if(/\.css$/i.test(url)){
                res.set('Content-Type', 'text/css');
            } else if(/\.js$/i.test(url)){
                res.set('Content-Type', 'text/javascript');
            } else {
                res.set('Content-Type', 'text/plain');
            }
            res.send(content);
        } else {
            next();
        }
    }
};