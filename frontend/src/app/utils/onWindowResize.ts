/// <reference path="../../lib/typings/knockout/knockout.d.ts"/>
/// <reference path="../../lib/typings/durandal/durandal.d.ts"/>


import ko from "knockout";

export class OnWindowResize{
    public widthSize = ko.observable(window.innerWidth);
    public heightSize = ko.observable(window.innerHeight);
    public onResize(){
        this.widthSize(window.innerWidth);
        this.heightSize(window.innerHeight);
    }
    public activate(){
        window.addEventListener('resize',this.onResize);
    };
    public deactivate(){
        window.removeEventListener('resize',this.onResize);
    }
}

export const onWindowResize = new OnWindowResize();
export const activate = ()=> onWindowResize.activate();
export const deactivate = ()=> onWindowResize.deactivate();