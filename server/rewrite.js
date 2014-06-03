var fs = require('fs');

module.exports = function(root){
    root = root.replace(/\/+$/, '');
    return function(req, res, next){
        var url = req.url.replace(/\?.*$/, '');
        if(url === '/'){
            url = '/index.html';
        }
        var file = root + url;
        if(fs.existsSync(file)){
            res.sendfile(file);
        } else {
            next();
        }
    };
};