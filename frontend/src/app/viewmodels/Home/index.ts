///<reference path="../../../lib/typings/knockout/knockout.d.ts" />
/// <reference path="../../../lib/typings/durandal/durandal.d.ts" />

import * as router from "plugins/router";
import ko from "knockout";
export class Home{
    title:KnockoutObservable<string>;
    constructor(){
        this.title = ko.observable("Home page")
    }
    onToLogin(){
        router.navigate("#login")
    }
    onToRegister(){
        router.navigate("#register")
    }
}

export const home = new Home();