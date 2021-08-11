///<reference path="../../../lib/typings/knockout/knockout.d.ts" />
/// <reference path="../../../lib/typings/durandal/durandal.d.ts" />

import {SUBSCRIPTIONS} from "../../utils/constants";
import {eCommercialStoreImpl} from "../../datastore/impl/eCommericalStoreImp";
import * as router from "plugins/router";
import ko from "knockout";
import app from "durandal/app";
export class Dashboard {
    title: KnockoutObservable<string>;
    constructor() {
        this.title = ko.observable("Dashboard Page");
    }
    canActivate() {  
        if(eCommercialStoreImpl.isLoggedIn){
            return eCommercialStoreImpl.isLoggedIn;
        }else{
            return eCommercialStoreImpl.isLoggedIn;
        }  
       
    }
    activate() {
        console.log("******activate*******");
    }
    canDeactivate() {
        return app.showMessage("are you sure to log out","Log out",["YES","NO"])
    }
    deactivate() {
        console.log("******callback?*******")
    }
    onToLogout() {
        router.navigate("#home")
    }

}

export const dashboard = new Dashboard();
export const canActivate = () => dashboard.canActivate();
export const activate = ()=> dashboard.activate()
export const canDeactivate = () =>dashboard.canDeactivate();
export const deactivate = ()=> dashboard.deactivate();