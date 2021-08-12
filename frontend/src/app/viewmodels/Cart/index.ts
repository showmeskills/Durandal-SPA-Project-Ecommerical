///<reference path="../../../lib/typings/knockout/knockout.d.ts" />
/// <reference path="../../../lib/typings/durandal/durandal.d.ts" />

import ko from "knockout";
import * as router from "plugins/router";

import {storeImpl} from "../../datastore/impl/storeImpl";

export class Cart{
    title:KnockoutObservable<string>;
    constructor(){
        this.title = ko.observable("Cart Page")
    }
    canActivate(){
        
        if(storeImpl.isLoggedIn){
            router.navigate("#dashboard");
            return storeImpl.isLoggedIn;
        }else{
            router.navigate("#login");
            return true;
        }
        
    }
    activate(){

    }
}

export const cart = new Cart();
export const activate = ()=> cart.activate();
export const canActivate = ()=> cart.canActivate();