///<reference path="../../lib/typings/durandal/durandal.d.ts"/>
///<reference path="../../lib/typings/knockout/knockout.d.ts"/>
///<reference path="../../lib/typings/requirejs/require.d.ts"/>

import * as rtr from "plugins/router";

export class Shell{
    router =rtr;
    activate(){
        return this.router.map([
            {route:["","login"],moduleId:"viewmodels/login/index",title:"Login",nav:true},
        ]).buildNavigationModel().activate()
    }
}

export const shell = new Shell();
export const router = shell.router;
export const activate = ()=> shell.activate();






