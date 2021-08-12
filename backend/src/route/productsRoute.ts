import express from 'express';
import Products from "../controllers/Products";
const router = express.Router();
const products = new Products();
router.get('/products',products.getAllProducts);


export default router;