require.config({
    paths: {
        jquery: '../components/jquery/jquery',
        bootstrap: 'vendor/bootstrap',
        pixastic: '../components/pixastic/pixastic',
        pixastic_invert: '../components/pixastic/invert'
    },
    shim: {
        pixastic_invert: {
            deps: ['pixastic'],
            exports: 'pixastic_invert'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['app', 'jquery', 'bootstrap'], function (app, $) {
    'use strict';
    // use app here
    console.log(app);
    console.log('Running jQuery %s', $().jquery);
});
