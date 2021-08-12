///<reference path="../../../lib/typings/knockout/knockout.d.ts" />
/// <reference path="../../../lib/typings/durandal/durandal.d.ts" />

import * as rtr from "plugins/router";
import ko from "knockout";
export class Home {
    title: KnockoutObservable<string>;
    constructor() {
        this.title = ko.observable("Home page")
    }
    activate() {
        return 
    }
}

export const home = new Home();
export const activate = ()=> home.activate();