/// <reference path="../lib/typings/knockout/knockout.d.ts" />
/// <reference path="../lib/typings/jquery/index.d.ts" />
/// <reference path="../lib/typings/durandal/durandal.d.ts" />
/// <reference path="../lib/typings/requirejs/require.d.ts" />


(()=>{
    define([
        "require",
        "config"
    ], (require: Require) => {
        const initComponent: Array<string> = [
            'durandal/app',
            'durandal/viewLocator',
            'durandal/system',
            'plugins/dialog',
            'bootstrap'
        ]
        require(initComponent, (app: DurandalAppModule, viewLocator: DurandalViewLocatorModule, system: DurandalSystemModule, dialog, bootstrap) => {
            system.debug(true);
            app.title = "Durandal SPA Project";
    
            app.configurePlugins({
                router: true,
                dialog: true,
                widget: true,
            })
            app.start().then(() => {
                viewLocator.useConvention();
                app.setRoot("viewmodels/shell", 'entrance', 'app')
            })
        })
    })
})()