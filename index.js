import express from "express";
import bodyParser from "body-parser";
import productRouter from "./src/routers/product.js";
import AdminRouter from "./src/routers/Admin.js";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.raw());
app.use(bodyParser.json());

app.use(express.static("public"));

app.use("/product", productRouter);
app.use("/admin", AdminRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})