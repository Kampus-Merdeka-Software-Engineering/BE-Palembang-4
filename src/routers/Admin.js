import { Router } from "express";
import { get } from "../controllers/Admin.js";

const AdminRouter = Router();

AdminRouter.get("/:id", get);
// AdminRouter.post("/email", post);

export default AdminRouter;