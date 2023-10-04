import { Router } from "express";
import { get, post } from "../controllers/Admin.js";

const AdminRouter = Router();

AdminRouter.get("/", get);
AdminRouter.post("/email", post);

export default AdminRouter;