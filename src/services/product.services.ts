import { generateId, productsDatabase } from "../database/database";
import { IProducts, TProduct } from "../interfaces/products.interfaces";

export class ProductServices{
    getProducts():IProducts[]{
        return productsDatabase
    }

    createProduct(body:TProduct):IProducts{
         const newProduct = {id:generateId(), ...body}

         productsDatabase.push(newProduct)

         return newProduct

    }
}