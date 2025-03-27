import { NextFunction, Request, Response } from "express";
import { productsDatabase } from "../database/database";

export class IsProductIdValid{
    static execute(req:Request, res:Response, next:NextFunction){
        const id = req.params.id

        if(!productsDatabase.some(product => product.id === Number(id))){
             res.status(404).json({message: "Product not found."})
             return
        }
        next()
    }
}