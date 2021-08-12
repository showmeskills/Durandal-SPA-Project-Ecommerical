/// <reference path="../../../lib/typings/jquery/index.d.ts" />



export const ajax = <T>(url: string, type: string, data?: any,) => {
        return new Promise<T>((resolve, reject) => {
                $.ajax({
                        url,
                        type,
                        data,
                        dataType: 'json',
                        beforeSend: () => { },
                        success: (data) => {
                                if (data) resolve(data);
                        },
                        error: (error) => {
                                if (error) reject(error);
                        },
                });
        });
}

