///<reference path="../../../lib/typings/knockout/knockout.d.ts" />
/// <reference path="../../../lib/typings/durandal/durandal.d.ts" />

import ko from "knockout";
import app from "durandal/app";

import {SUBSCRIPTIONS} from "../../utils/constants";


export class NotFound{
    title = ko.observable("Not found this page");
    constructor(){}
    canActivate(){
        app.trigger(SUBSCRIPTIONS[SUBSCRIPTIONS.IS_VISIBLE],false)
        return true;
    }
    activate(){

    }
    canDeactivate(){
        return true;
    }
    deactivate(){
        app.trigger(SUBSCRIPTIONS[SUBSCRIPTIONS.IS_VISIBLE],true)
    }
}

export const notFound = new NotFound();
export const activate = ()=>notFound.activate();
export const canActivate = ()=>notFound.canActivate();
export const deactivate = ()=>notFound.deactivate();
export const canDeactivate = ()=>notFound.canDeactivate();