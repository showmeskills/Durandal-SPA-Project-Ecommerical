/// <reference path="../../../lib/typings/jquery/index.d.ts" />



export const ajax = <T>(url:string, type:string,dataType:string="json")=>{

        return $.ajax({
            url,
            type,
            dataType,
            beforeSend:()=>{},
            success:()=>{},
            error:()=>{},
        })   
}

