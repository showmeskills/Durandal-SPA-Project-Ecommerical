///<reference path="../../../lib/typings/knockout/knockout.d.ts" />
/// <reference path="../../../lib/typings/durandal/durandal.d.ts" />

import ko from "knockout";

export class NotFound{
    title = ko.observable("Not found this page");
}

export const notFound = new NotFound();