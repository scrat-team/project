var info = require('./package.json');
//set name, version
fis.config.set('name', info.name);
fis.config.set('version', info.version);
//use localstorage
fis.config.set('framework.cache', true);