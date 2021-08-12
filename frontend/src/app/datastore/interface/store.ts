


export interface ProductListArray {
     productId: number,
     productName: string,
     productPrice: number,
     productsDesc: string,
     productCategory: string,
     productsImgUrl: string
 }
export interface ProductList{
     productList: ProductListArray[]
}

export interface StoreStatus{
     isLoggedIn?: boolean;
     isVisible?: boolean;
     productList: ProductListArray[]
}
