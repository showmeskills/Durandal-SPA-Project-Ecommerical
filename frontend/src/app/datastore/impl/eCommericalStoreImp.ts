///<reference path="../../../lib/typings/knockout/knockout.d.ts" />
/// <reference path="../../../lib/typings/durandal/durandal.d.ts" />

import {ECommercialStore} from "../interface/eCommericalStore";
import {SUBSCRIPTIONS} from "../../utils/constants";

import app from "durandal/app";
import observable from "plugins/observable";

export class ECommercialStoreImpl implements ECommercialStore{
    isLoggedIn:boolean = false;
    constructor(){
        observable(this,"LOGGED_IN").subscribe((value)=>{
            app.trigger(SUBSCRIPTIONS[SUBSCRIPTIONS.LOGGED_IN],this.isLoggedIn)
        })
    }
}


export const eCommercialStoreImpl = new ECommercialStoreImpl();


