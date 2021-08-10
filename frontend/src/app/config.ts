///<reference path="../lib/typings/requirejs/require.d.ts" />


requirejs.config({
    paths:{
        'text': '../lib/require/text',
        'durandal':'../lib/durandal/js',
        'plugins' : '../lib/durandal/js/plugins',
        'transitions' : '../lib/durandal/js/transitions',
        'knockout': '../lib/knockout/knockout-3.4.0',
        'bootstrap': '../lib/bootstrap/js/bootstrap',
        'jquery': '../lib/jquery/jquery-1.9.1'
    },
    shim:{
        "knockout":{
            deps:["jquery"],
            exports:'ko'
        },
        "bootstrap":{
            deps:["jquery"],
            exports:"bootstrap"
        }
    }
})