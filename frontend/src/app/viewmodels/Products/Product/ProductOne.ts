/// <reference path="../../../../lib/typings/durandal/durandal.d.ts" />
/// <reference path="../../../../lib/typings/knockout/knockout.d.ts" />

import * as rtr from "plugins/router";
import ko from "knockout"

export class ProductOne{
    title = ko.observable("Product detail 1 page");
    constructor(){}
}

export const productOne = new ProductOne();

