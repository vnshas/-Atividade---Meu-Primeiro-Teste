import { productsDatabase } from "../../database/database";
import { ProductServices } from "../../services/product.services";
import { productMock, productUpdateMock } from "../__mocks__/product.mock";

describe("unite test: delete product", () => {
  test("delete product should be working correctly", () => {
    productsDatabase.push(productMock);

    const productServices = new ProductServices();

    productServices.deleteProduct(productMock.id)
  });
});