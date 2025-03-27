import { productsDatabase, resetDatabase } from "../../database/database"
import { ProductServices } from "../../services/product.services"
import { productCreateBodyMock, productMock } from "../__mocks__/product.mock"

describe("Unit test: get products", () =>{
   
    beforeEach(() =>{
        resetDatabase()
    })
    test("get products should work correctly", () =>{
        productsDatabase.push(productMock)

        const productServices = new ProductServices()

        const data = productServices.getProducts()

        expect(data).toHaveLength(1)
        expect(data[0]).toStrictEqual(productMock)
    })
})