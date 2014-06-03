//template
var tpl = __inline('foo.handlebars');

//class Foo
var Foo = function(items){
    this._items = items;
};

//method render
Foo.prototype.render = function(selector){
    //get dom
    var dom = document.querySelector(selector);
    if(dom){
        //use template
        dom.innerHTML = tpl(this._items);
        var foo = dom.querySelector('.foo');
        this.bindEvents(foo);
    } else {
        //throw error
        throw 'Invalid selector[' + selector + ']';
    }
};

//method bindEvents
Foo.prototype.bindEvents = function(dom){
    var timer, self = this;
    dom.addEventListener('touchstart', function(){
        timer = setTimeout(function(){
            self.shake(dom);
        }, 500);
    }, false);
    dom.addEventListener('touchend', function(){
        clearTimeout(timer);
    }, false);
};

//method shake
Foo.prototype.shake = function(dom){
    if(/\bshake\b/.test(dom.className)){
        dom.className = 'foo';
    } else {
        dom.className = 'foo shake';
    }
};

//setter
Foo.prototype.setItems = function(items){
    this._items = items;
};

//getter
Foo.prototype.getItems = function(){
    return this._items;
};

//export factory
module.exports = function(items){
    return new Foo(items);
};

//export class
module.exports.Foo = Foo;