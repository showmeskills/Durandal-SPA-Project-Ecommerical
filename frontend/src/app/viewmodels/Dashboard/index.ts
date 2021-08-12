///<reference path="../../../lib/typings/knockout/knockout.d.ts" />
/// <reference path="../../../lib/typings/durandal/durandal.d.ts" />

import {SUBSCRIPTIONS} from "../../utils/constants";
import {storeImpl} from "../../datastore/impl/storeImpl";
import * as router from "plugins/router";
import ko from "knockout";
import app from "durandal/app";
export class Dashboard {
    title: KnockoutObservable<string>;
    constructor() {
        this.title = ko.observable("Dashboard Page");
    }
    canActivate() {  
        if(storeImpl.isLoggedIn){
            router.navigate("#dashboard")
            app.trigger(SUBSCRIPTIONS[SUBSCRIPTIONS.IS_VISIBLE],false);
            return storeImpl.isLoggedIn;
        }else{
            router.navigate("#home");
            return storeImpl.isLoggedIn;
        }  
       
    }
    activate() {
        console.log("******activate*******");
    }
    canDeactivate() {
        app.trigger(SUBSCRIPTIONS[SUBSCRIPTIONS.IS_VISIBLE],false);
        return app.showMessage("are you sure to log out","Log out",["YES","NO"])
    }
    deactivate() {
        app.trigger(SUBSCRIPTIONS[SUBSCRIPTIONS.IS_VISIBLE],true);
        app.trigger(SUBSCRIPTIONS[SUBSCRIPTIONS.LOGGED_IN],false)
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