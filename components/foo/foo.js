var log = require('log');

exports.start = function(msg){
    log.notice(msg);
};

exports.stop = function(msg){
    log.error(msg);
};