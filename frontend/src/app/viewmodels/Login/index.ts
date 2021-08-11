///<reference path="../../../lib/typings/knockout/knockout.d.ts" />
/// <reference path="../../../lib/typings/durandal/durandal.d.ts" />

import {SUBSCRIPTIONS} from "../../utils/constants";
import ko from "knockout";
import * as router from "plugins/router";
import app from "durandal/app";



export class Login{
    title:KnockoutObservable<string>;
    constructor(){
        this.title = ko.observable("Login page")
    }
    activate(){
      
    }
    onToRegister(event:Event):void{
        event = event || window.event;
        router.navigate("#register");
        event.preventDefault();
    }
    onLoggedIn(){
        router.navigate("#dashboard");  
        app.trigger(SUBSCRIPTIONS[SUBSCRIPTIONS.LOGGED_IN],true)
    }
}

export const login = new Login();
export const activate = ()=>login.activate();

