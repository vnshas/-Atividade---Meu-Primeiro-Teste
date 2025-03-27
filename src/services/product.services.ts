import { generateId, productsDatabase } from "../database/database";
import { IProducts, TProduct, TUpdateProduct } from "../interfaces/products.interfaces";

export class ProductServices{
    getProducts():IProducts[]{
        return productsDatabase
    }

    createProduct(body:TProduct):IProducts{
         const newProduct = {id:generateId(), ...body}

         productsDatabase.push(newProduct)

         return newProduct

    }

    updateProduct(body:TUpdateProduct,updatingId:number):IProducts{
        const product = productsDatabase.find(product => product.id === updatingId) as IProducts

        const index = productsDatabase.findIndex(product => product.id === updatingId)

        const updateProduct = {...product, ...body}

        productsDatabase.splice(index,1, updateProduct)

        return updateProduct

    }

    deleteProduct(removingId:number){
        const index = productsDatabase.findIndex(product => product.id === removingId)

        productsDatabase.splice(index, 1)
    }
}