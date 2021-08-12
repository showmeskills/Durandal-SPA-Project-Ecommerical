
///<reference path="../../../lib/typings/knockout/knockout.d.ts" />
/// <reference path="../../../lib/typings/durandal/durandal.d.ts" />
import * as rtr from "plugins/router";
import ko from "knockout";

export class Products{
    title: KnockoutObservable<string>;
    productsChildRouter: DurandalRootRouter;
    constructor() {
        this.title = ko.observable("Products-list page")
        this.productsChildRouter = rtr.createChildRouter().makeRelative({ moduleId: "viewmodels/Products", fromParent:true})
            .map([
                { route: ['', 'product-detail-one'], moduleId: "Product/ProductOne", title: "ProductOne", nav: true },
                { route: 'product-detail-two', moduleId: "Product/ProductTwo", title: "ProductTwo", nav: true },
            ])
            .buildNavigationModel();
    }
    activate() {
        return 
    }
    onToDetailPage(data) {
        const { hash } = data;
        rtr.navigate(hash);
    }
}



export const products = new Products();
export const router = products.productsChildRouter;
export const activate = ()=> products.activate();