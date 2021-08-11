///<reference path="../../../lib/typings/knockout/knockout.d.ts" />
/// <reference path="../../../lib/typings/durandal/durandal.d.ts" />

import ko from "knockout"
import * as router from "plugins/router";

export class Register{
    title:KnockoutObservable<string>;
    constructor(){
        this.title = ko.observable("Register Page")
    }
    toLogin(event:Event):void{
        event = event || window.event;
        router.navigate("#login");
        event.preventDefault();
    }
}

export const register = new Register();