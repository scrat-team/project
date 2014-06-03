var tpl = __inline('header.handlebars');

module.exports = function(selector, title){
    var dom = document.querySelector(selector);
    if(dom){
        dom.innerHTML = tpl({ title: title });
    } else {
        //throw error
        throw 'Invalid selector[' + selector + ']';
    }
};