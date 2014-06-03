var request = require('request');

module.exports = function(target){
    target = target.replace(/\/+$/, '');
    return function(req, res){
        req.pipe(request(target + req.url)).pipe(res);
    };
};