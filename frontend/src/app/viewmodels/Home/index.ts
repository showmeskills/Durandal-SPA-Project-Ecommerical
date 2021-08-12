///<reference path="../../../lib/typings/knockout/knockout.d.ts" />
/// <reference path="../../../lib/typings/durandal/durandal.d.ts" />

import * as rtr from "plugins/router";
import ko from "knockout";
export class Home{
    title:KnockoutObservable<string>;
    homeChildRouter:DurandalRootRouter;
    constructor(){
        this.title = ko.observable("Home page")
        this.homeChildRouter = rtr.createChildRouter()
        .makeRelative({moduleId:"viewmodels/Home",fromParent:true})
        .map([
            {route:'/:id*details',moduleId:"Product/Product",hash:"#/:id"},
            {route:'product-detail/:id*details',moduleId:"Product/Product",hash:"#product-detail/:id"},
        ])
        .buildNavigationModel();
    }
    onToLogin(){
        rtr.navigate("#login")
    }
    onToRegister(){
        rtr.navigate("#register")
    }

}

export const home = new Home();
export const router = home.homeChildRouter;