///<reference path="../../../lib/typings/knockout/knockout.d.ts" />
/// <reference path="../../../lib/typings/durandal/durandal.d.ts" />

import ko from "knockout";

export class Cart{
    title:KnockoutObservable<string>;
    constructor(){
        this.title = ko.observable("Cart Page")
    }
}

export const cart = new Cart();