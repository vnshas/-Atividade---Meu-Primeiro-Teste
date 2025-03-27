import { Router } from "express";
import { ProductController } from "../controllers/product.controllers";
import { IsProductIdValid } from "../middleware/isProductIdValid.middleware";

export const productRouter = Router()

const productControllers = new ProductController()

productRouter.post("/", productControllers.createProduct)

productRouter.get("/", productControllers.getProducts)

productRouter.patch("/:id",IsProductIdValid.execute , productControllers.updateProduct)

productRouter.delete("/:id",IsProductIdValid.execute  ,productControllers.deleteProduct)