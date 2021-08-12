import {Response,Request} from "express";
import SafeRequest from "../models/SafeRequest";
const safeRequest = new SafeRequest();
class Products{
    async getAllProducts(req:Request,res:Response){
        try{
            const result = await safeRequest.getAllProducts();
            res.status(200).send(result);
        }catch(err){
            res.status(404).send(err);
        }
    }
}


export default Products;