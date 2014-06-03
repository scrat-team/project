//scrat tools create framework config
require.config(__FRAMEWORK_CONFIG__);

//use component `header', `foo' async
require.async(['header', 'foo'], function(header, foo){
    
    header('#header', 'Press and hold the icons');
    
    //data
    var items = [
        'http://hao.uc.cn/fouber/assets/icon_01.png',
        'http://hao.uc.cn/fouber/assets/icon_02.png',
        'http://hao.uc.cn/fouber/assets/icon_03.png',
        'http://hao.uc.cn/fouber/assets/icon_04.png',
        'http://hao.uc.cn/fouber/assets/icon_05.png',
        'http://hao.uc.cn/fouber/assets/icon_06.png',
        'http://hao.uc.cn/fouber/assets/icon_07.png',
        'http://hao.uc.cn/fouber/assets/icon_08.png',
        'http://hao.uc.cn/fouber/assets/icon_09.png',
        'http://hao.uc.cn/fouber/assets/icon_10.png',
        'http://hao.uc.cn/fouber/assets/icon_11.png',
        'http://hao.uc.cn/fouber/assets/icon_12.png'
    ];
    //render
    foo(items).render('#main');
});