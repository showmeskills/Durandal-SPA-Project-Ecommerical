///<reference path="../../lib/typings/durandal/durandal.d.ts"/>
///<reference path="../../lib/typings/knockout/knockout.d.ts"/>
///<reference path="../../lib/typings/requirejs/require.d.ts"/>
///<reference path="../../lib/typings/jquery/index.d.ts" />
import * as rtr from "plugins/router";
import ko from "knockout";

import {eCommercialStoreImpl} from "../datastore/impl/eCommericalStoreImp";
import {SUBSCRIPTIONS} from "../utils/constants";
import app from "durandal/app";
import {onWindowResize} from "../utils/onWindowResize";


export class Shell{
    public router =rtr;
    public defaultPage = {route:"",moduleId:"viewmodels/Home/index"};
    isVisible = ko.observable(eCommercialStoreImpl.isVisible);
    isNavbarShowBottom = ko.observable(false);
    mapRouters = ko.observableArray([
        this.defaultPage,
        {route:"home",moduleId:"viewmodels/Home/index",title:"Home",nav:true},
        {route:"login",moduleId:"viewmodels/Login/index",title:'Member Login',nav:true},
        {route:"register",moduleId:"viewmodels/Register/index",title:'Member Join',nav:true},
        {route:"cart",moduleId:"viewmodels/Cart/index",title:"Cart",nav:true},
        {route:"dashboard",moduleId:"viewmodels/Dashboard/index"},
        {route:"notfound",moduleId:"viewmodels/NotFound/index"}
    ])
    onResize(){
        const resizeWidth = Math.ceil(onWindowResize.widthSize() * 0.8);
        if(resizeWidth <= 962){
            // this.isNavbarShowBottom(true);
        }
        console.log(resizeWidth)
    }
    public activate(){
        app.on(SUBSCRIPTIONS[SUBSCRIPTIONS.LOGGED_IN]).then((value:boolean)=>{
            eCommercialStoreImpl.isLoggedIn = value;
        })
        app.on(SUBSCRIPTIONS[SUBSCRIPTIONS.IS_VISIBLE]).then((value:boolean)=>{
            this.isVisible(value);
        })
        
        this.onResize();
        window.addEventListener('resize',this.onResize);
        

        return this.router.map(
            this.mapRouters())
            .buildNavigationModel()
            .mapUnknownRoutes("viewmodels/NotFound/index","404/not-found")
            .activate();
    }
    deactivate(){
        window.removeEventListener('resize',this.onResize);
    }
}

export const shell = new Shell();
export const router = shell.router;
export const activate = ()=> shell.activate();
export const deactivate = ()=> shell.deactivate();






