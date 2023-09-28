import { Router } from "express";
import { get } from "../controllers/products.js";

const productRouter = Router();

productRouter.get("/:id", get);

export default productRouter;