///<reference path="../../../lib/typings/knockout/knockout.d.ts" />
/// <reference path="../../../lib/typings/durandal/durandal.d.ts" />

import {StoreStatus} from "../interface/store";
import {SUBSCRIPTIONS} from "../../utils/constants";
import {ProductListArray} from "../interface/store";
import ko from "knockout";
import app from "durandal/app";
import observable from "plugins/observable";

export class StoreImpl implements StoreStatus{
    isLoggedIn:boolean = false;
    isVisible:boolean = true;
    productList:ProductListArray[]=[];
    constructor(){
        observable(this,"LOGGED_IN").subscribe((value)=>{
            app.trigger(SUBSCRIPTIONS[SUBSCRIPTIONS.LOGGED_IN],this.isLoggedIn)
        })
        observable(this,"ISVISIBLE").subscribe((value)=>{
            app.trigger(SUBSCRIPTIONS[SUBSCRIPTIONS.IS_VISIBLE],this.isVisible)
        })
        observable(this,"PRODUCT_LIST").subscribe((value)=>{
            app.trigger(SUBSCRIPTIONS[SUBSCRIPTIONS.PRODUCT_LIST],this.productList);
        })
    }
}


export const storeImpl = new StoreImpl();


