import { Router } from "express";
import { get, post } from "../controllers/products.js";

const productRouter = Router();

productRouter.get("/", get);
productRouter.post("/:id", post);

export default productRouter;