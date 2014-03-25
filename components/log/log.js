var dom;

function getDom(){
    if(!dom){
        dom = document.createElement('ul');
        dom.className = 'log';
        document.body.appendChild(dom);
    }
    return dom;
}

function append(msg, className){
    var li = document.createElement('li');
    li.className = className;
    li.innerHTML = msg;
    getDom().appendChild(li);
}

exports.notice = function(msg){
    append(msg, 'notice');
    console.log('[NOTIC] ' + msg);
};

exports.error = function(msg){
    append(msg, 'error');
    console.debug('[ERROR] ' + msg);
};