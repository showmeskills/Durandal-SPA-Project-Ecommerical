/// <reference path="../../../../lib/typings/durandal/durandal.d.ts" />
/// <reference path="../../../../lib/typings/knockout/knockout.d.ts" />

import * as rtr from "plugins/router";
import ko from "knockout"

import {products} from "../index";
export class ProductTwo{
    productsWinter = null;
    constructor(){}
    activate(){
        this.productsWinter = products.productsWinter
    }
}

export const productTwo = new ProductTwo();
export const activate = () => productTwo.activate();

