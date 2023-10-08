import express, { Router } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import sequelize from "./config/Databases.js";
import {startSequelize} from "./config/startSequelize.js";
import cors from "cors";

import "./models/index.js";
import router from "./routes/ProductRoutes.js";

dotenv.config();

const app = express();
const routers = Router();
const port = process.env.PORT;

app.use(bodyParser.urlencoded());
app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(cors());

// app.use(bodyParser.static("node_modules/bootstrap/dist"));
app.use(express.static("public"));

// app.use("/books", express.static("public/books.html"));

routers.use("/api/product", router);
app.use(router);

startSequelize(sequelize);

// app.use(`/.netlify/functions/api`, router);

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});