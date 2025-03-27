import { productsDatabase } from "../../database/database";
import { ProductServices } from "../../services/product.services";
import { productMock, productUpdateMock } from "../__mocks__/product.mock";

describe("unite test: update product", () => {
  test("update product should be working correctly", () => {
    productsDatabase.push(productMock);

    const productServices = new ProductServices();

    const data = productServices.updateProduct(
      productUpdateMock,
      productMock.id
    );

    expect(data.id).toBe(productMock.id);
    expect(data.name).toBe(productUpdateMock.name);
    expect(data.description).toBe(productUpdateMock.description);
    expect(data.price).toBe(productUpdateMock.price);
  });
});
