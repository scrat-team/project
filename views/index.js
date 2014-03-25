require.config(__FRAMEWORK_CONFIG__);

require.async('foo', function(foo){
    foo.start('it works');
    foo.stop('it works');
});
