///<reference path="../../../lib/typings/knockout/knockout.d.ts" />
/// <reference path="../../../lib/typings/durandal/durandal.d.ts" />

import * as rtr from "plugins/router";
import ko from "knockout";
import system from "durandal/system";
import app from "durandal/app";

import {storeImpl} from "../../datastore/impl/storeImpl";
import { ajax } from "../../services/request/safeReqimpl";
import {SUBSCRIPTIONS} from "../../utils/constants";

interface Carousel {
    id: number;
    imgUrl: string;
}
type ProductListArray ={
    productId: number,
    productName: string,
    productPrice: number,
    productsDesc: string,
    productCategory: string,
    productsImgUrl: string
}
interface ProductsList {
    productList: ProductListArray[]
}

export class Home {
    carousel: KnockoutObservableArray<Carousel>;
    productList: KnockoutObservableArray<ProductListArray>;
    constructor() {
        this.carousel = ko.observableArray([])
        this.productList = ko.observableArray([]);
    }
    getData() {
        ajax("http://localhost:3100/api/ads", "get")
            .then((response: Array<Carousel>) => {
                this.carousel(response)
            })
            .catch((error) => {
                system.log("error====>", error);
            })
    }
    canActivate(){
       
        return true;
    }
    activate() {
        if(storeImpl.productList.length>0){
            this.productList(storeImpl.productList)
        }

        if (this.carousel().length > 0) return;

        return this.getData();
    }
}

export const home = new Home();
export const activate = () => home.activate();