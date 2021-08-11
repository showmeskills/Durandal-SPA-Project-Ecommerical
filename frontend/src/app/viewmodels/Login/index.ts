///<reference path="../../../lib/typings/knockout/knockout.d.ts" />
/// <reference path="../../../lib/typings/durandal/durandal.d.ts" />

import {eCommercialStoreImpl} from "../../datastore/impl/eCommericalStoreImp";
import {SUBSCRIPTIONS} from "../../utils/constants";
import ko from "knockout";
import * as router from "plugins/router";
import app from "durandal/app";



export class Login{
    title:KnockoutObservable<string>;
    isLogged = 0;
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
        //router.navigate("#dashboard");
       
        app.on(SUBSCRIPTIONS[SUBSCRIPTIONS.LOGGED_IN]).then((value)=>{
            console.log("value=====>",value)
            this.isLogged = value;
        })
        console.log(this.isLogged)
    }
}

export const login = new Login();
export const activate = ()=>login.activate();

