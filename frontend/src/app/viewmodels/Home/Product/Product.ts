/// <reference path="../../../../lib/typings/durandal/durandal.d.ts" />
/// <reference path="../../../../lib/typings/knockout/knockout.d.ts" />

import * as rtr from "plugins/router";


export class Index{
    productDetailChildRouter = rtr.createChildRouter()
    .makeRelative({moduleId:"Product",fromParent:true})
    .map([
        {route:'',moduleId:"ProductDetail"},
        {route:'first',moduleId:"ProductDetail"},
    ])
    .buildNavigationModel();
    constructor(){
       
    }
}

export const index = new Index();
export const router = index.productDetailChildRouter;
