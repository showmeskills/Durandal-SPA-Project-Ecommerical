/// <reference path="../../../../lib/typings/durandal/durandal.d.ts" />
/// <reference path="../../../../lib/typings/knockout/knockout.d.ts" />

import * as rtr from "plugins/router";
import ko from "knockout";

import {products} from "../index";

export class ProductOne{
    productsSummer = null;
    
    constructor(){}
    activate() {
        this.productsSummer = products.productsSummer
    }
}

export const productOne = new ProductOne();
export const activate = () => productOne.activate();

