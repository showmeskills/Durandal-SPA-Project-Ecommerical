///<reference path="../../lib/typings/durandal/durandal.d.ts"/>
///<reference path="../../lib/typings/knockout/knockout.d.ts"/>
///<reference path="../../lib/typings/requirejs/require.d.ts"/>
///<reference path="../../lib/typings/jquery/index.d.ts" />
import * as rtr from "plugins/router";
import ko from "knockout";
import {eCommercialStoreImpl} from "../datastore/impl/eCommericalStoreImp";
import {SUBSCRIPTIONS} from "../utils/constants";
import app from "durandal/app";
import { ShellMenu } from "./shellMenu";


export class Shell{
    public router =rtr;
    public defaultPage = {route:"",moduleId:"viewmodels/Home/index"};
    public isLogged = true;
    mapRouters = ko.observableArray([
        this.defaultPage,
        {route:"home",moduleId:"viewmodels/Home/index",title:"Home",nav:true},
        {route:"login",moduleId:"viewmodels/Login/index",title:'Member Login',nav:true},
        {route:"register",moduleId:"viewmodels/Register/index",title:'Member Join',nav:true},
        {route:"cart",moduleId:"viewmodels/Cart/index",title:"Cart",nav:true},
        {route:"dashboard",moduleId:"viewmodels/Dashboard/index"},
        {route:"notfound",moduleId:"viewmodels/NotFound/index"}
    ])
    activate(){
        const logonRole = $("div#app").attr("data-role");
        return this.router.map(
            this.mapRouters())
            .buildNavigationModel()
            .mapUnknownRoutes("viewmodels/NotFound/index","404/not-found")
            .activate();
    }
    isRouteShow(){
        // console.log(window.location.href.toString());    
        // this.router.routes.map((route)=>{
        //     console.log(route);
        // })
        return true;
    }
  
}

export const shell = new Shell();
export const router = shell.router;
export const activate = ()=> shell.activate();






