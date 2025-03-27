import { Request, Response } from "express";
import { IProducts } from "../interfaces/products.interfaces";
import { ProductServices } from "../services/product.services";

export class ProductController{
    createProduct(req:Request, res:Response){
        const productServices = new ProductServices()

        const response = productServices.createProduct(req.body)

        res.status(201).json(response)

        return 
    }
    getProducts(req:Request, res:Response){
        const productServices = new ProductServices()

        const response = productServices.getProducts()

         res.status(200).json(response)

         return
    }

    updateProduct(req:Request, res:Response){
        const productServices = new ProductServices()

        const id = req.params.id

        const response = productServices.updateProduct(req.body, Number(id))

         res.status(200).json(response)

         return
    }

    deleteProduct(req:Request, res:Response){
        const productServices = new ProductServices()

        const id = req.params.id

        productServices.deleteProduct(Number(id))

         res.status(204).json()

         return
    }


}