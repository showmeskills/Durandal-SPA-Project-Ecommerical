///<reference path="../../lib/typings/durandal/durandal.d.ts"/>
///<reference path="../../lib/typings/knockout/knockout.d.ts"/>
///<reference path="../../lib/typings/requirejs/require.d.ts"/>

import app from "durandal/app";
import system from "durandal/system";
import * as rtr from "plugins/router";
import ko from "knockout";

import {ajax} from "../services/request/safeReqimpl";
import {ProductListArray} from "../datastore/interface/store";
import {storeImpl} from "../datastore/impl/storeImpl";
import {SUBSCRIPTIONS} from "../utils/constants";




export class Shell{
    public router =rtr;   
    isVisible = ko.observable(storeImpl.isVisible);
    isNavbarShowBottom = ko.observable(false);
    mapRouters = ko.observableArray([
        {route:["","home"],moduleId:"viewmodels/Home/index",},
        {route:"products*details",moduleId:"viewmodels/Products/index",title:"P-List",nav:true},
        {route:"login",moduleId:"viewmodels/Login/index",title:'Member Login',nav:true},
        {route:"register",moduleId:"viewmodels/Register/index",title:"Register",nav:true},
        {route:"cart",moduleId:"viewmodels/Cart/index",title:"My Cart",nav:true},
        {route:"dashboard",moduleId:"viewmodels/Dashboard/index"},
        {route:"notfound",moduleId:"viewmodels/NotFound/index"}
    ])
    public activate(){
        app.on(SUBSCRIPTIONS[SUBSCRIPTIONS.LOGGED_IN]).then((value:boolean)=>{
            storeImpl.isLoggedIn = value;
        })
        app.on(SUBSCRIPTIONS[SUBSCRIPTIONS.IS_VISIBLE]).then((value:boolean)=>{
            this.isVisible(value);
        })
        app.on(SUBSCRIPTIONS[SUBSCRIPTIONS.PRODUCT_LIST]).then((value:ProductListArray[])=>{
            storeImpl.productList = value;
        })
        

        return this.router.map(
            this.mapRouters())
            .buildNavigationModel()
            .mapUnknownRoutes("viewmodels/NotFound/index","404/not-found")
            .activate();
    }
    deactivate(){
    }
    onGoToHomePage(){
        rtr.navigate("");
    }
}

export const shell = new Shell();
export const router = shell.router;
export const activate = ()=> shell.activate();
export const deactivate = ()=> shell.deactivate();






