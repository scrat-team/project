/**
 * @require bar.css
 */

var log = require('log');

var img = __inline('mask.png');
var css = __inline('bar.css');
var tpl = __inline('foo.tpl');

exports.start = function(msg){
    log.notice(msg);
};

exports.stop = function(msg){
    log.error(msg);
};