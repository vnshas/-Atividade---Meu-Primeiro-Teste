import { productsDatabase, resetDatabase } from "../../database/database";
import { productMock, productUpdateMock } from "../__mocks__/product.mock";
import { request } from "../utils/request";

describe("Integration test: update product", () => {
  beforeEach(() => {
    resetDatabase();
  });

  test("should update product sucessfully", async () => {
    productsDatabase.push(productMock);

    const data = await request
      .patch(`/products/${productMock.id}`)
      .send(productUpdateMock)
      .expect(200)
      .then((response) => response.body);

    expect(data.id).toBe(productMock.id);
    expect(data.name).toBe(productUpdateMock.name);
    expect(data.description).toBe(productUpdateMock.description);
    expect(data.price).toBe(productUpdateMock.price);
  });

  test("should throw error when product is invalid", async () => {
    const data = await request
      .patch(`/products/1`)
      .send(productUpdateMock)
      .expect(404)
      .then((response) => response.body);

    expect(data.message).toBe("Product not found.");
  });
});
