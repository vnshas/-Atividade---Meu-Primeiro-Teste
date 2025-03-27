import { productsDatabase, resetDatabase } from "../../database/database"
import { ProductServices } from "../../services/product.services"
import { productCreateBodyMock, productMock } from "../__mocks__/product.mock"

describe("Unit test: create product", () =>{
   
    test("create product should work correctly", () =>{
        const productServices = new ProductServices()

        const data = productServices.createProduct(productCreateBodyMock)
    
        expect(data).toStrictEqual(productMock);
    })
})