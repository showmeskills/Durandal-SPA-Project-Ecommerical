/// <reference path="../../../../lib/typings/durandal/durandal.d.ts" />
/// <reference path="../../../../lib/typings/knockout/knockout.d.ts" />

import * as rtr from "plugins/router";
import ko from "knockout"

export class ProductTwo{
    title = ko.observable("Product detail 2 page");
    constructor(){}
}

export const productTwo = new ProductTwo();

