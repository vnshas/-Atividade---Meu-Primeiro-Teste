import { productsDatabase, resetDatabase } from "../../database/database"
import { productListMock } from "../__mocks__/product.mock"
import { request } from "../utils/request"

describe("integration test: get products", () =>{
    beforeEach(() =>{
        resetDatabase()
    })

    test("should be able to ge products correctly", async () =>{
        productListMock.forEach(product => productsDatabase.push(product))

        const data = await request.get("/products").expect(200).then(response => response.body)

        expect(data).toHaveLength(2)
        expect(data[0]).toStrictEqual(productListMock[0])
        expect(data[1]).toStrictEqual(productListMock[1])
    })
})