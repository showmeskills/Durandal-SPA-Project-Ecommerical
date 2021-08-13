
///<reference path="../../../lib/typings/knockout/knockout.d.ts" />
/// <reference path="../../../lib/typings/durandal/durandal.d.ts" />
import * as rtr from "plugins/router";
import ko from "knockout";

import { storeImpl } from "../../datastore/impl/storeImpl";
import { ProductListArray } from "datastore/interface/store";

export class Products{
    title: KnockoutObservable<string>;
    productsChildRouter: DurandalRootRouter;
    productsSummer:KnockoutObservable<ProductListArray[]>
    productsWinter:KnockoutObservable<ProductListArray[]>
    constructor() {
        this.title = ko.observable("Products-list page");
        this.productsSummer = ko.observableArray([]);
        this.productsWinter = ko.observableArray([]);
        this.productsChildRouter = rtr.createChildRouter().makeRelative({ moduleId: "viewmodels/Products", fromParent:true})
            .map([
                { route: ['', 'product-detail-one'], moduleId: "Product/ProductOne", title: "Summer", nav: true },
                { route: 'product-detail-two', moduleId: "Product/ProductTwo", title: "Winter", nav: true },
            ])
            .buildNavigationModel();
    }
    activate() {
        if(storeImpl.productList.length > 0){
            console.log("productsList====> in List",storeImpl.productList)
            const winter = ko.utils.arrayFilter(storeImpl.productList,(product)=>{
                return product.productCategory === "Winter";
            })
            const summer = ko.utils.arrayFilter(storeImpl.productList,(product)=>{
                return product.productCategory === "Summer";
            })
            this.productsSummer(summer);
            this.productsWinter(winter);
        }  
    }
    onToDetailPage(data) {
        const { hash } = data;
        rtr.navigate(hash);
    }
}



export const products = new Products();
export const router = products.productsChildRouter;
export const activate = ()=> products.activate();