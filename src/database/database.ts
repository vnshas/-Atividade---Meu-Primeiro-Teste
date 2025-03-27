import { IProducts } from "../interfaces/products.interfaces"

let id = 0

export let productsDatabase : IProducts[] = []

export const resetDatabase = () =>{
    productsDatabase = []
}

export const generateId = () =>{
    id++
    return id
}